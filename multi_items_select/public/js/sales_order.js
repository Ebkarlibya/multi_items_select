
frappe.ui.form.on("Sales Order", {
    setup: function (frm) {
        frm.mis_add_item_row = function (item_code, item_name, warehouse, actual_qty, reserved_qty) {
            const sellable_qty = actual_qty - reserved_qty;
            let qd = new frappe.ui.Dialog(
                {

                    title: __("Select Insert Quantity"),
                    fields: [
                        {
                            fieldname: "qty",
                            fieldtype: "Float",
                            label: "Qty",
                            default: 1,
                            reqd: 1,

                        },
                        {
                            fieldtype: "Section Break",
                        },
                        {
                            fieldname: "item_code",
                            fieldtype: "Link",
                            label: "Item Code",
                            options: "Item",
                            read_only: 1,
                        },
                        {
                            fieldtype: "Column Break",
                        },
                        {
                            fieldname: "item_name",
                            fieldtype: "Data",
                            label: "Item Name",
                            read_only: 1,
                        },
                        {
                            fieldtype: "Section Break",
                        },
                        {
                            fieldname: "warehouse",
                            fieldtype: "Link",
                            label: "Warehouse",
                            options: "Warehouse",
                            read_only: 1,
                        },
                        {
                            fieldtype: "Column Break",
                        },
                        {
                            fieldname: "actual_qty",
                            fieldtype: "Float",
                            label: "Actual Qty",
                            read_only: 1,
                        },
                        {
                            fieldtype: "Section Break",
                        },
                        {
                            fieldname: "reserved_qty",
                            fieldtype: "Float",
                            label: "Reserved Qty",
                            read_only: 1,
                        },
                        {
                            fieldtype: "Column Break",
                        },
                        {
                            fieldname: "sellable_qty",
                            fieldtype: "Float",
                            label: "Sellable Qty",
                            read_only: 1,
                        }
                    ],
                    primary_action_label: __("Insert Item"),
                    primary_action: async function (values) {
                        const itemsGrid = frm.get_field("items").grid;
                        let d = null;
                        
                        // validate sellable qty
                        let mis_settings = await frappe.call({
                            method: "multi_items_select.api.get_settings",
                        });
                        mis_settings = mis_settings.message;
                        if(values.qty > sellable_qty) {
                            debugger
                            switch(mis_settings.sellable_qty_action){
                                case "Nothing":
                                    break;
                                case "Warn":
                                    frappe.msgprint(__(`Warning: Item <strong>${item_code}</strong> with Qty (${values.qty}) is higher than the Sellable Qty (${sellable_qty}) however your item got inserted successfully`), "Multi Items Select");
                                    break;
                                case "Stop":
                                    if(frappe.user.has_role(mis_settings.sellable_bypass_role)) {
                                        frappe.msgprint(__(`Warning: Item <strong>${item_code}</strong> with Qty (${values.qty}) is higher than the Sellable Qty (${sellable_qty}) however your item got inserted successfully`), "Multi Items Select");
                                        break;
                                    }
                                case "Stop":
                                    frappe.msgprint(__(`Cannot Insert: Item <strong>${item_code}</strong> with Qty (${values.qty}) is higher than the Sellable Qty (${sellable_qty})`), "Multi Items Select");
                                    return;
                            }
                        }
                        
                        frappe.run_serially([
                            () => d = itemsGrid.add_new_row(),
                            () => frappe.timeout(0.2),
                            () => {
                                let args = {};
                                args["item_code"] = item_code;
                                args["qty"] = values.qty;
                                return frappe.model.set_value(d.doctype, d.name, args);
                            }
                        ]);
                        frappe.show_alert(__("Multi Item Select: Item Added!"));
                        qd.hide();
                    }


                },

            );
            qd.show();
            qd.set_value("item_code", item_code);
            qd.set_value("item_name", item_name);
            qd.set_value("warehouse", warehouse);
            qd.set_value("actual_qty", actual_qty);
            qd.set_value("reserved_qty", reserved_qty);
            qd.set_value("sellable_qty", actual_qty - reserved_qty);
        }
    },
    refresh: async function (frm) {
        const itemsGrid = frm.get_field("items").grid;

        // get multi items select settings
        let mis_settings = await frappe.call({
            method: "multi_items_select.api.get_settings",
        });
        mis_settings = mis_settings.message;

        if (mis_settings.enabled == 0 || frm.doc.docstatus === 1) {
            return;
        }

        if (mis_settings.disable_original_add_multi) {
            if (itemsGrid.grid_buttons.find(".grid-add-multiple-rows")) {
                itemsGrid.grid_buttons.find(".grid-add-multiple-rows").remove();
            }
        }

        const cbtn = frm.fields_dict["items"].grid.add_custom_button(__("Multi Insert"), function () {

            var d = new frappe.ui.Dialog({
                title: __("Multi Item Select: Multi Insert"),
                type: "large",
                fields: [
                    {
                        fieldtype: "Data",
                        fieldname: "search_term",
                        label: __("Search Items"),
                        onchange: function () {
                            d.set_df_property("search_results", "hidden", true);
                            d.set_df_property("no_data", "hidden", true);
                            d.set_df_property("query_loading", "hidden", false);
                            setTimeout(() => {
                                frappe.call(
                                    {
                                        method: "multi_items_select.api.get_multiple_items",
                                        args: {
                                            source_warehouse: frm.doc.set_warehouse,
                                            search_term: d.get_value("search_term")
                                        },
                                        freeze: true,
                                        callback: function (r) {
                                            if (r.message) {
                                                let data_rows = "";
                                                // d.mis_search_data = r.message;

                                                if (r.message.length > 0) {
                                                    d.set_df_property("search_results", "hidden", false);
                                                    d.set_df_property("query_loading", "hidden", true);
                                                    d.set_df_property("no_data", "hidden", true);
                                                } else {
                                                    d.set_df_property("search_results", "hidden", true);
                                                    d.set_df_property("query_loading", "hidden", true);
                                                    d.set_df_property("no_data", "hidden", false);
                                                }

                                                for (let i = 0; i < r.message.length; i++) {
                                                    let data = r.message[i];
                                                    data_rows += repl(
                                                        `<tr 
                                                                class="etms-add-multi__tb_tr"
                                                                onclick="cur_frm.mis_add_item_row(\`%(item_code)s\`, \`%(item_name)s\`, \`%(warehouse)s\`, \`%(actual_qty)s\`, \`%(reserved_qty)s\`)">
                                                            <td>
                                                                <div class="etms-add-multi__row">
                                                                    <p>${data.item_code}</p>
                                                                </div>
                                                                <p class="etms-multi__subtitle1">${data.item_name}</p>
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
                                                        </tr>`,
                                                        {
                                                            item_code: data.item_code,
                                                            item_name: data.item_name,
                                                            warehouse: data.warehouse,
                                                            actual_qty: data.actual_qty,
                                                            reserved_qty: data.reserved_qty,
                                                        }
                                                    );
                                                }
                                                let html = `
                                                <table class="table table-striped">
                                                    <thead>
                                                        <tr class="etms-add-multi__th_tr">
                                                            <th scope="col">Item Code</th>
                                                            <th scope="col">Warehouse</th>
                                                            <th scope="col">Actual Qty</th>
                                                            <th scope="col">Reserved Qty</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        ${data_rows}
                                                    </tbody>
                                                    </table>
                                                    <style>
                                                        .etms-add-multi__row {
                                                            cursor: pointer;
                                                        }
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
                                                    </style>
                                                `;
                                                d.set_df_property("search_results", "options", html);
                                            }
                                        }
                                    }
                                )
                            }, 200);
                        }
                    },
                    {
                        fieldname: "query_loading",
                        fieldtype: "HTML",
                        label: __("Query Loading"),
                        hidden: 1,
                        options: `
                            <div class="etms-multi__query_loading">
                                <div class="spinner-border" role="status">
                                    <span class="sr-only">Loading...</span>
                                </div><br>
                                <p>${frappe._('No Items Found...')}</p>
                            <div>
                            <style>
                                .etms-multi__query_loading {
                                    display: flex;
                                    flex-direction: column;
                                    justify-content: center;
                                    align-items: center;

                                }
                            </style>
                        `
                    },
                    {
                        fieldtype: "HTML",
                        fieldname: "no_data",
                        options: `
                            <div class="etms-multi__no_data">
                                <p>${frappe._('No Items Found...')}</p>
                            </div>
                            <style>
                                .etms-multi__no_data {
                                    display: flex;
                                    justify-content: center;

                                }
                            </style>
                        `,
                        hidden: 0
                    },
                    {
                        fieldtype: "HTML",
                        fieldname: "search_results",
                        hidden: 0
                    },
                ],
                primary_action_label: __("Close"),
                primary_action: function () {
                    d.hide();
                },
            });
            d.show();
            d.set_value("search_term", "");
        });
        cbtn.addClass("btn-primary");
    },
    before_submit: async function (frm) {
        if (!frm.doc.set_warehouse) {
            return;
        }

        // get multi items select settings
        let mis_settings = await frappe.call({
            method: "multi_items_select.api.get_settings",
        });
        mis_settings = mis_settings.message;
        

        let so_items = [];

        for (let i = 0; i < frm.doc.items.length; i++) {
            so_items.push(frm.doc.items[i].item_code);
        }

        frappe.call({
            method: "multi_items_select.api.get_items_reserved_qty",
            args: { item_codes: so_items, source_warehouse: frm.doc.set_warehouse },
            callback: function (r) {
                if (!r.message) {
                    return;
                }
                for (let i = 0; i < r.message.length; i++) {
                    debugger
                    // r.message[i].reserved_qty = 45;
                    if (frm.doc.items[i].item_code == r.message[i].item_code) {
                        let limit_qty = r.message[i].reserved_qty + frm.doc.items[i].qty;
                        if (limit_qty > r.message[i].actual_qty && mis_settings.sellable_qty_action == "Stop") {
                            setTimeout(() => {
                                frappe.throw(`Can't submit, Item: ${r.message[i].item_code} in row: (${frm.doc.items[i].idx})  
                                Reserved Qty (${r.message[i].reserved_qty}) + Item Qty (${frm.doc.items[i].qty}) 
                                is higher than Actual Qty (${r.message[i].actual_qty}) in warehouse: (${frm.doc.set_warehouse}).<br>
                                 Avaliable Qty for sell is: (${r.message[i].actual_qty - r.message[i].reserved_qty})
                            `, "Multi Items Select");
                            }, 2000);
                            frappe.validated = false;
                            frappe.model.set_value(
                                "Sales Order Item",
                                frm.doc.items[i].name,
                                "mis_sellable_qty", r.message[i].actual_qty - r.message[i].reserved_qty,
                                "Float",
                                true
                            );
                            frappe.model.set_value(
                                "Sales Order Item",
                                frm.doc.items[i].name,
                                "mis_reserved_qty", r.message[i].reserved_qty,
                                "Float",
                                true
                            );
                            // frm.save_or_update();
                        }
                    }
                }
            }
        });
    }
});