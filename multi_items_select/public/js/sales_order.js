
frappe.ui.form.on("Sales Order", {
    setup: function (frm) {
        cur_frm.mia_add_item_row = function (item_code) {
            frappe.prompt(
                {
                    fieldname: "qty",
                    fieldtype: "Float",
                    label: "Qty",
                    default: 1,
                    reqd: 1,

                },
                function (data) {

                    let itemsGrid = frm.get_field("items").grid;
                    let d = null;

                    frappe.run_serially([
                        () => d = itemsGrid.add_new_row(),
                        () => frappe.timeout(0.2),
                        () => {
                            let args = {};
                            args["item_code"] = item_code;
                            args["qty"] = data.qty;
                            return frappe.model.set_value(d.doctype, d.name, args);
                        }
                    ]);
                    frappe.show_alert(__("Master Addons: Item Added!"));
                },
                __("Select Quantity"),
                __("Insert")
            );
        }
    },
    refresh: function (frm) {
        var mulBtn = frm.fields_dict["items"].grid.grid_buttons.find(".grid-add-multiple-rows");
        if (mulBtn) {
            // mulBtn.remove();
        }

        frm.fields_dict["items"].grid.add_custom_button(__("Multi Insert"), function () {

            var d = new frappe.ui.Dialog({
                title: __("Master Addons: Multi Insert"),
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
                                                d.mia_search_data = r.message;

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
                                                                onclick="cur_frm.mia_add_item_row(\`%(item_code)s\`)">
                                                            <td>
                                                                <div class="etms-add-multi__row">
                                                                    <p>${data.item_code}</p>
                                                                </div>
                                                                <p class="etms-multi__item_name">${data.item_name}</p>
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
                                                            </td>
                                                            <td>
                                                                <div class="etms-add-multi__row">
                                                                    <p>${data.reserved_qty}</p>
                                                                <div>
                                                            </td>
                                                        </tr>`,
                                                        {
                                                            item_code: data.item_code
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
                                                        .etms-multi__item_name {
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


    }
});