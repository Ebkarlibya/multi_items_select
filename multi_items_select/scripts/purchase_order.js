
frappe.ui.form.on("Purchase Order", {
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

                        let can_bypass = await frappe.call({
                            method: "multi_items_select.api.get_can_bypass",
                        });
                        can_bypass = can_bypass.message;

                        if (values.qty > sellable_qty) {
                            switch (mis_settings.sellable_qty_action) {
                                case "Nothing":
                                    break;
                                case "Warn":
                                    frappe.msgprint(__(`Warning: Item <strong>${item_code}</strong> with Qty (${values.qty}) is higher than the Sellable Qty (${sellable_qty}) however your item got inserted successfully`), "Multi Items Select");
                                    break;
                                case "Stop":
                                    if (can_bypass) {
                                        frappe.msgprint(__(`Warning: Item <strong>${item_code}</strong> with Qty (${values.qty}) is higher than the Sellable Qty (${sellable_qty}) however your item got inserted successfully`), "Multi Items Select");
                                        break;
                                    } else {
                                        frappe.msgprint(__(`Cannot Insert: Item <strong>${item_code}</strong> with Qty (${values.qty}) is higher than the Sellable Qty (${sellable_qty})`), "Multi Items Select");
                                        return;
                                    }
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
            // if (!frm.doc.customer) {
            //     frappe.show_alert(__("Multi Item Select: Please select customer first"));
            //     return
            // }
            var d = new frappe.ui.Dialog({
                title: __("Multi Item Select: Multi Insert"),
                type: "large",
                fields: [
                    {
                        fieldtype: "Data",
                        fieldname: "search_term",
                        label: __("Search Items")
                    },
                    {
                        label: __("Extra Filters"),
                        fieldname: "extra_filters",
                        fieldtype: "Section Break",
                        collapsible: 1
                    },
                    {
                        label: __(mis_settings.item_group_label ? mis_settings.item_group_label : "Item Group"),
                        fieldname: "item_group",
                        fieldtype: "Link",
                        options: "Item Group",
                        change: function () {
                            let searchTerm = this.layout.get_field("search_term")
                            searchTerm.input.dispatchEvent(new Event('input'));
                        }
                    },
                    { fieldtype: "Column Break" },
                    {
                        label: __(mis_settings.brand_label ? mis_settings.brand_label : "Brand"),
                        fieldname: "brand",
                        fieldtype: "Link",
                        options: "Brand",
                        change: function () {
                            let searchTerm = this.layout.get_field("search_term")
                            searchTerm.input.dispatchEvent(new Event('input'));
                        }
                    },
                    { fieldtype: "Column Break" },
                    {
                        label: __(mis_settings.item_option_label ? mis_settings.item_option_label : "Item Option"),
                        fieldname: "item_option",
                        fieldtype: "Link",
                        options: "Item Option",
                        change: function () {
                            let searchTerm = this.layout.get_field("search_term")
                            searchTerm.input.dispatchEvent(new Event('input'));
                        }
                    },
                    { fieldtype: "Column Break" },
                    {
                        label: __(mis_settings.item_sub_category_label ? mis_settings.item_sub_category_label : "Item Sub-Category"),
                        fieldname: "item_sub_category",
                        fieldtype: "Link",
                        options: "Item Sub-Category",
                        change: function () {
                            let searchTerm = this.layout.get_field("search_term")
                            searchTerm.input.dispatchEvent(new Event('input'));
                        }
                    },
                    { fieldtype: "Section Break" },
                    {
                        label: __("Search Results"),
                        fieldname: "search_results",
                        fieldtype: "Section Break"
                    },
                    {
                        fieldtype: "Column Break"
                    },
                    {
                        fieldname: "include_non_stock",
                        fieldtype: "Check",
                        label: __("Include Non Maintain Stock"),
                        default: false,
                        change: function () {
                            let searchTerm = this.layout.get_field("search_term")
                            searchTerm.input.dispatchEvent(new Event('input'));
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

            let timeout = null;

            d.get_field("search_term").input.oninput = function () {
                clearTimeout(timeout);
                timeout = setTimeout(function () {
                    d.set_df_property("search_results", "hidden", true);
                    d.set_df_property("no_data", "hidden", true);
                    d.set_df_property("query_loading", "hidden", false);
                    setTimeout(() => {
                        frappe.call(
                            {
                                method: "multi_items_select.api.get_multiple_items",
                                args: {
                                    source_warehouse: frm.doc.set_warehouse,
                                    search_term: d.get_value("search_term"),
                                    include_non_stock: d.get_value("include_non_stock"),
                                    item_group: d.get_value("item_group"),
                                    brand: d.get_value("brand"),
                                    item_option: d.get_value("item_option"),
                                    item_sub_category: d.get_value("item_sub_category"),


                                },
                                freeze: true,
                                callback: function (r) {
                                    if (r.message) {
                                        let data_rows = "";
                                        // d.mis_search_data = r.message;
                                        let totalLabel = d.get_field("search_results").section.head[0]

                                        if (r.message.length > 0) {
                                            d.set_df_property("search_results", "hidden", false);
                                            d.set_df_property("query_loading", "hidden", true);
                                            d.set_df_property("no_data", "hidden", true);
                                            totalLabel.innerText = `Search Results (${r.message.length})`
                                        } else {
                                            d.set_df_property("search_results", "hidden", true);
                                            d.set_df_property("query_loading", "hidden", true);
                                            d.set_df_property("no_data", "hidden", false);
                                            totalLabel.innerText = `Search Results (0)`
                                        }

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
                                                                class="etms-add-multi__tb_tr"
                                                                onclick="cur_frm.mis_add_item_row(\`%(item_code)s\`, \`%(item_name)s\`, \`%(warehouse)s\`, \`%(actual_qty)s\`, \`%(reserved_qty)s\`)">
                                                                <td>
                                                                <div class="etms-add-multi__row">
                                                                    <p>${data.item_code}</p>
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
                                                    item_code: data.item_code,
                                                    item_name: data.item_name,
                                                    warehouse: data.warehouse,
                                                    actual_qty: data.actual_qty,
                                                    reserved_qty: data.reserved_qty,
                                                }
                                            );
                                        }
                                        let html = `
                                                <table class="table table-striped" style="margin: 0px;">
                                                    <thead>
                                                        <tr class="etms-add-multi__th_tr">
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
                    }, 100);
                }, 500);
            }
            let searchTerm = d.get_field("search_term")
            searchTerm.input.dispatchEvent(new Event('input'));
            searchTerm.input.placeholder = "Item Name";

        });
        cbtn.addClass("btn-primary");
    },
    validated: function (frm) {
        // // so items
        // for (let i = 0; i < frm.doc.items.length; i++) {
        //     let row = frm.doc.items[i];
        //     debugger
        //     if (row.qty > row.mis_sellable_qty) {
        //         if (mis_settings.sellable_qty_action == "Warn") {
        //             console.log("Warn");
        //         }
        //         else if (mis_settings.sellable_qty_action == "Stop") {
        //             console.log("Stop");
        //         }


        //     }
        // }

        // // so packed items
        // if (frm.doc.packed_items) {
        //     for (let i = 0; i < frm.doc.packed_items.length; i++) {
        //         let row = frm.doc.packed_items[i];

        //         if (row.qty > row.mis_sellable_qty) {
        //             if (mis_settings.sellable_qty_action == "Warn") {
        //                 if (!can_bypass.message) {
        //                     frappe.validated = true;
        //                     setTimeout(() => {
        //                         frappe.msgprint(`
        //                         <p style="font-size: 12px; line-height: 14px;">
        //                             Warning, Packed Item: ${row.item_code} in row: (${row.idx}) Qty: (${row.qty})  
        //                             is higher than Sellable Qty (${row.mis_sellable_qty}) in warehouse: (${row.warehouse})
        //                         </p>
        //                         `, "Warning");
        //                     }, 1500);

        //                 }
        //             }
        //             else if (mis_settings.sellable_qty_action == "Stop") {
        //                 if (!can_bypass.message) {
        //                     frappe.validated = false;
        //                     setTimeout(() => {
        //                         frappe.msgprint(`
        //                         <p style="font-size: 12px; line-height: 14px;">
        //                             Can't submit, Packed Item: ${row.item_code} in row: (${row.idx}) Qty: (${row.qty})  
        //                             is higher than Sellable Qty (${row.mis_sellable_qty}) in warehouse: (${row.warehouse})
        //                         </p>
        //                         `, "Warning");
        //                     }, 1500);

        //                 }
        //             }


        //         }
        //     }
        // }
    },
    before_submit: async function (frm) {
        console.log('disabled!2');

        // // get multi items select settings
        // let mis_settings = await frappe.call({
        //     method: "multi_items_select.api.get_settings",
        // });
        // mis_settings = mis_settings.message;

        // let can_bypass = await frappe.call({
        //     method: "multi_items_select.api.get_can_bypass",
        //     freeze: true,
        // });

        // // so items
        // for (let i = 0; i < frm.doc.items.length; i++) {
        //     let row = frm.doc.items[i];

        //     // if(row.item_group == "Opration Item"){
        //     //     continue;
        //     // }

        //     if (row.qty > row.mis_sellable_qty) {
        //         if (mis_settings.sellable_qty_action == "Warn") {
        //             if (!can_bypass.message) {
        //                 frappe.validated = true;
        //                 setTimeout(() => {
        //                     frappe.msgprint(`
        //                     <p style="font-size: 12px; line-height: 14px;">
        //                         Warning, Item: ${row.item_code} in row: (${row.idx}) Qty (${row.qty})
        //                         is higher than Sellable Qty (${row.mis_sellable_qty}) in warehouse: (${row.warehouse})
        //                     </p>
        //                     `, "Warning");
        //                 }, 1500);

        //             }
        //         }
        //         else if (mis_settings.sellable_qty_action == "Stop") {
        //             if (!can_bypass.message) {
        //                 frappe.validated = false;
        //                 setTimeout(() => {
        //                     frappe.msgprint(`
        //                     <p style="font-size: 12px; line-height: 14px;">
        //                         Can't submit, Item ${row.item_code} in row: (${row.idx}) Qty: (${row.qty})  
        //                         is higher than Sellable Qty (${row.mis_sellable_qty}) in warehouse: (${row.warehouse})
        //                     </p>
        //                     `, "Warning");
        //                 }, 1500);

        //             }
        //         }


        //     }
        // }

        // // so packed items
        // if (frm.doc.packed_items) {
        //     for (let i = 0; i < frm.doc.packed_items.length; i++) {
        //         let row = frm.doc.packed_items[i];

        //         if(row.item_group == "Opration Item"){
        //             continue;
        //         }

        //         if (row.qty > row.mis_sellable_qty) {
        //             if (mis_settings.sellable_qty_action == "Warn") {
        //                 if (!can_bypass.message) {
        //                     frappe.validated = true;
        //                     setTimeout(() => {
        //                         frappe.msgprint(`
        //                         <p style="font-size: 12px; line-height: 14px;">
        //                             Warning, Packed Item: ${row.item_code} in row: (${row.idx}) Qty: (${row.qty})  
        //                             is higher than Sellable Qty (${row.mis_sellable_qty}) in warehouse: (${row.warehouse})
        //                         </p>
        //                         `, "Warning");
        //                     }, 1500);

        //                 }
        //             }
        //             else if (mis_settings.sellable_qty_action == "Stop") {
        //                 if (!can_bypass.message) {
        //                     frappe.validated = false;
        //                     setTimeout(() => {
        //                         frappe.msgprint(`
        //                         <p style="font-size: 12px; line-height: 14px;">
        //                             Can't submit, Packed Item: ${row.item_code} in row: (${row.idx}) Qty: (${row.qty})  
        //                             is higher than Sellable Qty (${row.mis_sellable_qty}) in warehouse: (${row.warehouse})
        //                         </p>
        //                         `, "Warning");
        //                     }, 1500);

        //                 }
        //             }


        //         }
        //     }
        // }
    },
    // customer: function (frm) {
    //     if (frm.doc.customer) {
    //         frappe.call({
    //             method: "multi_items_select.api.get_customer_outstandings",
    //             args: {
    //                 customer: frm.doc.customer
    //             },
    //             callback: function (r) {
    //                 frappe.model.set_value(frm.doctype, frm.docname, "mia_outstanding_amount", r.message.outstanding_amount);
    //                 frappe.model.set_value(frm.doctype, frm.docname, "mia_total_outstanding_amount", r.message.total_outstanding_amount);
    //             }
    //         });
    //     }
    // }
});