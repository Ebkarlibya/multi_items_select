
frappe.ui.form.on("Stock Entry", {
    setup: function(frm) {
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
        // bulk items insert
        if (frm.doc.docstatus < 1) {
            frm.add_custom_button(__("Warehouse"), function () {
                let fields = [
                    {
                        label: 'Warehouse',
                        fieldname: 'warehouse',
                        fieldtype: 'Link',
                        options: 'Warehouse',
                        reqd: 1,
                        "get_query": function () {
                            return {
                                "filters": {
                                    "company": frm.doc.company,
                                }
                            };
                        }
                    },
                    {
                        label: "Item Code",
                        fieldname: "item_code",
                        fieldtype: "Link",
                        options: "Item",
                        "get_query": function () {
                            return {
                                "filters": {
                                    "disabled": 0,
                                }
                            };
                        }
                    },
                    {
                        label: __("Ignore Empty Stock"),
                        fieldname: "ignore_empty_stock",
                        fieldtype: "Check"
                    }
                ];

                frappe.prompt(fields, function (data) {
                    frappe.call({
                        method: "erpnext.stock.doctype.stock_reconciliation.stock_reconciliation.get_items",
                        args: {
                            warehouse: data.warehouse,
                            posting_date: frm.doc.posting_date,
                            posting_time: frm.doc.posting_time,
                            company: frm.doc.company,
                            item_code: data.item_code,
                            ignore_empty_stock: data.ignore_empty_stock
                        },
                        callback: function (r) {
                            if (r.exc || !r.message || !r.message.length) return;

                            frm.clear_table("items");

                            r.message.forEach((row) => {
                                let item = frm.add_child("items");
                                $.extend(item, row);

                                item.qty = item.qty || 0;
                            });
                            frm.refresh_field("items");
                            frappe.show_alert(__("Multi Item Select: Items Added!"));
                        }
                    });
                }, __("Get Items"), __("Update"));
            }, frappe._("Get Items From"));
        }

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
                        label: __("Search Items")
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
                                    source_warehouse: frm.doc.from_warehouse,
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
                }, 700);
            }
            let searchTerm = d.get_field("search_term")
            searchTerm.input.dispatchEvent(new Event('input'));
            searchTerm.input.placeholder = "Item Name";
            // d.set_value("search_term", "");
        });
        cbtn.addClass("btn-primary");
    }
});