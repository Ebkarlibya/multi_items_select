export default (item_code, warehouse) => {
    const selected_item = cur_frm.mis_last_search_data.find(el => el.item_code === item_code)
    const { item_name, actual_qty, reserved_qty, mis_has_packed_item } = selected_item

    if (mis_has_packed_item) {
        frm.mis_add_packed_items(item_code)
        return
    }

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
                let settings = await frappe.call({
                    method: "multi_items_select.api.get_settings",
                });
                settings = settings.message;

                let can_bypass = await frappe.call({
                    method: "multi_items_select.api.get_can_bypass",
                });
                can_bypass = can_bypass.message;

                if (values.qty > sellable_qty) {
                    switch (settings.sellable_qty_action) {
                        case "Nothing":
                            break;
                        case "Warn":
                            frappe.msgprint(__(`Warning: Item <strong>${item_code}</strong> with Qty (${values.qty}) is higher than the Sellable Qty (${sellable_qty}) however your item got inserted successfully`), "MIS");
                            break;
                        case "Stop":
                            if (can_bypass) {
                                frappe.msgprint(__(`Warning: Item <strong>${item_code}</strong> with Qty (${values.qty}) is higher than the Sellable Qty (${sellable_qty}) however your item got inserted successfully`), "MIS");
                                break;
                            } else {
                                frappe.msgprint(__(`Cannot Insert: Item <strong>${item_code}</strong> with Qty (${values.qty}) is higher than the Sellable Qty (${sellable_qty})`), "MIS");
                                return;
                            }
                    }
                }

                frappe.run_serially([
                    () => d = itemsGrid.add_new_row(),
                    () => frappe.timeout(1.0),
                    async () => {
                        let args = {};
                        args["item_code"] = item_code;
                        args["qty"] = values.qty;
                        args["warehouse"] = values.warehouse;

                        let model = frappe.model.set_value(d.doctype, d.name, args);

                        setTimeout(() => {
                            d.warehouse = warehouse;
                            frm.trigger("warehouse", d.doctype, d.name)
                        }, 1000)
                        return model;
                    }
                ]);
                frappe.show_alert(__("(MIS): Item Added!"));
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