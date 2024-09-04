import { getCanBypass } from "../utils/helpers";

export default async (packed_item_code) => {
        let can_bypass = await getCanBypass()

        let qd = new frappe.ui.Dialog(
            {

                title: __("Packed Item Details"),
                fields: [
                    {
                        fieldname: "packed_item",
                        fieldtype: "Link",
                        label: "Packed Item",
                        default: packed_item_code,
                        read_only: 1
                    },
                    { fieldtype: "Column Break" },
                    {
                        fieldname: "packed_item_name",
                        fieldtype: "Data",
                        label: "Packed Item Name",

                        default: packed_item_code,
                        read_only: 1
                    },
                    {
                        fieldtype: "Section Break",
                    },
                    {
                        fieldname: "qty",
                        fieldtype: "Float",
                        label: "Qty",
                        default: 1,
                        reqd: 1,

                    },
                    {
                        fieldtype: "Section Break",
                        label: "Packed Item Items"
                    },
                    {
                        fieldtype: "HTML",
                        fieldname: "packed_items_html",
                        hidden: 0,
                        options: "<h4>Loading Packed Item Data, Please Wait .... </h4>"
                    },

                ],
                primary_action_label: __("Insert Items"),
                primary_action: async function (values) {
                    frappe.dom.freeze()
                    const itemsGrid = frm.get_field("items").grid;
                    // const packedItemsGrid = this.get_field("packed_items").grid;

                    for (let i = 0; i < cur_frm.mis_last_packed_items_search_data.length; i++) {
                        const row = cur_frm.mis_last_packed_items_search_data[i]

                        const sellable_qty = row.actual_qty - row.reserved_qty;


                        if (row.actual_qty > sellable_qty) {
                            switch (settings.sellable_qty_action) {
                                case "Nothing":
                                    break;
                                case "Warn":
                                    frappe.msgprint(__(`Warning: Item <strong>${row.item_code}</strong> with Qty (${row.actual_qty}) is higher than the Sellable Qty (${sellable_qty}) however your item got inserted successfully`), "MIS");
                                    break;
                                case "Stop":
                                    if (can_bypass) {
                                        frappe.msgprint(__(`Warning: Item <strong>${row.item_code}</strong> with Qty (${row.actual_qty}) is higher than the Sellable Qty (${sellable_qty}) however your item got inserted successfully`), "MIS");
                                        break;
                                    } else {
                                        frappe.msgprint(__(`Cannot Insert: Item <strong>${row.item_code}</strong> with Qty (${row.actual_qty}) is higher than the Sellable Qty (${sellable_qty})`), "MIS");
                                        return;
                                    }
                            }
                        }

                        let d = null;

                        frappe.run_serially([
                            () => d = itemsGrid.add_new_row(),
                            () => frappe.timeout(0.2),
                            () => {
                                let args = {};
                                args["item_code"] = row.item_code;
                                args["qty"] = row.qty * values.qty;
                                args["warehouse"] = values.warehouse;

                                let model = frappe.model.set_value(d.doctype, d.name, args);

                                setTimeout(() => {
                                    d.warehouse = warehouse;
                                    frm.trigger("warehouse", d.doctype, d.name)
                                }, 1000)
                                return model;
                            }
                        ]);
                    }
                    frappe.dom.unfreeze()
                    frappe.show_alert(__("(MIS): Packed Items Added!"));
                    qd.hide();
                }


            },

        );
        qd.show();

        // load packed items data
        await wsleep(1000)
        frappe.call({
            method: "multi_items_select.api.get_packed_items",
            args: { packed_item_code },
            callback: function (r) {
                let data_rows = "";

                cur_frm.mis_last_packed_items_search_data = r.message


                for (let i = 0; i < r.message.length; i++) {
                    let data = r.message[i];
                    data.warehouse = data.warehouse ? data.warehouse : "-"
                    data.actual_qty = data.actual_qty ? data.actual_qty : "-"
                    data.reserved_qty = data.reserved_qty ? data.reserved_qty : "-"
                    data.ordered_qty = data.ordered_qty ? data.ordered_qty : "-"
                    data.brand = data.brand ? data.brand : "-"
                    data.stock_uom = data.stock_uom ? data.stock_uom : "-"


                    data_rows += repl(
                        `<tr 
                            class="etms-add-multi__tb_tr">
                                    <td style="vertical-align: middle; padding: 2px">
                                        <div class="img-hover">
                                            <img class="mis-img img-fluid img-thumbnail round" src="${data.image}" />
                                        </div>
                                    </td>
                                    <td>
                                        <div class="etms-add-multi__row">
                                            <p>${data.item_code} <span style="font-weight: bold; color: brown;">(${data.qty})</span></p>
                                            <p class="etms-multi__subtitle1">${data.item_name}</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="etms-add-multi__row">
                                            <p>${data.warehouse}</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="etms-add-multi__row">
                                            <p>${data.actual_qty}</p>
                                        <div>
                                        <p class="etms-multi__subtitle1">${data.stock_uom}</p>
                                    </td>
                                    <td>
                                        <div class="etms-add-multi__row">
                                            <p>${data.reserved_qty}</p>
                                        <div>
                                    </td>
                                    <td>
                                        <div class="etms-add-multi__row">
                                            <p>${data.ordered_qty}</p>
                                        <div>
                                    </td>
                                </tr>`,
                        {
                            item_code: data.item_code
                        }
                    );
                }
                let html = `
                        <table class="table table-striped" style="margin: 0px;">
                            <thead>
                                <tr class="etms-add-multi__th_tr">
                                    <th scope="col">Image</th>
                                    <th scope="col">Item Code</th>
                                    <th scope="col">Warehouse</th>
                                    <th scope="col">Actual Qty</th>
                                    <th scope="col">Reserved Qty</th>
                                    <th scope="col">Ordered Qty</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${data_rows}
                            </tbody>
                            </table>
                            <style>
                                .modal-content {
                                    width: fit-content
                                }
                                /*
                                .etms-add-multi__row {
                                    cursor: pointer;
                                }*/
                                .etms-multi__subtitle1 {
                                    font-size: 11px;
                                    color: gray;
                                }
                                .etms-add-multi__th_tr {
                                    white-space: nowrap;
                                }
                                .etms-add-etms-add-multi__tb_tr td {
                                    padding-top: 3px;
                                    padding-bottom: 0px;
                               
                                }
                                .img-hover img {
                                    -webkit-transition: all .3s ease; /* Safari and Chrome */
                                    -moz-transition: all .3s ease; /* Firefox */
                                    -o-transition: all .3s ease; /* IE 9 */
                                    -ms-transition: all .3s ease; /* Opera */
                                    transition: all .3s ease;
                                    position:relative;
                                }
                                .img-hover img:hover {
                                    cursor: zoom-in;
                                    z-index: 20;
                                    -webkit-backface-visibility: hidden;
                                    backface-visibility: hidden;
                                    -webkit-transform:translateZ(0) scale(4.20); /* Safari and Chrome */
                                    -moz-transform:scale(4.20); /* Firefox */
                                    -ms-transform:scale(4.20); /* IE 9 */
                                    -o-transform:translatZ(0) scale(4.20); /* Opera */
                                    transform:translatZ(0) scale(4.20);
                                }
                                  
                                .img-hover:hover:after {
                                    content:"";
                                    position:absolute;
                                    top:0;
                                    left:0;
                                    z-index:2;
                                    width:30px;
                                    height:30px;
                                    border:1px solid #000;
                                }
                                  
                                .grayscale {
                                  -webkit-filter: brightness(1.10) grayscale(100%) contrast(90%);
                                  -moz-filter: brightness(1.10) grayscale(100%) contrast(90%);
                                  filter: brightness(1.10) grayscale(100%); 
                                }
                            </style>
                        `;
                cur_dialog.set_df_property("packed_items_html", "options", html);
            }
        })
    }