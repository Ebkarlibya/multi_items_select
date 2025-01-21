import { DOCTYPES } from "../utils/mis_enums"

export default (item_code, warehouse) => {
    const selected_item = MISApp.misLastSearchData.find(el => el.item_code === item_code)
    const { item_name, actual_qty, reserved_qty, mis_has_packed_item } = selected_item

    console.log("selected_item: ", selected_item, MISApp.misSelectedItem);

    if (mis_has_packed_item) {
        window.MISApp.addPackedItemDialog(item_code)
        return
    }

    const sellable_qty = actual_qty - reserved_qty;
    
    let d = new frappe.ui.Dialog(
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
                { fieldtype: "Section Break", },
                {
                    fieldname: "item_code",
                    fieldtype: "Link",
                    label: "Item Code",
                    options: "Item",
                    read_only: 1,
                },
                { fieldtype: "Column Break" },
                {
                    fieldname: "item_name",
                    fieldtype: "Data",
                    label: "Item Name",
                    read_only: 1,
                },
                { fieldtype: "Section Break" },
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
                    default: 0,
                    read_only: 1,
                },
                {
                    fieldtype: "Section Break",
                },
                {
                    fieldname: "reserved_qty",
                    fieldtype: "Float",
                    label: "Reserved Qty",
                    default: 0,
                    read_only: 1,
                },
                {
                    fieldtype: "Column Break",
                },
                {
                    fieldname: "sellable_qty",
                    fieldtype: "Float",
                    label: "Sellable Qty",
                    default: 0,
                    read_only: 1,
                }
            ],
            primary_action_label: __("Insert Item"),
            primary_action: async function (values) {
                const itemsGrid = cur_frm.get_field("items").grid;

                // let d = null;

                // validate sellable qty
                // let settings = await frappe.call({
                //     method: "multi_items_select.api.get_settings",
                // });
                // settings = settings.message;

                // let can_bypass = await frappe.call({
                //     method: "multi_items_select.api.get_can_bypass",
                // });
                // can_bypass = can_bypass.message;

                if (values.qty > sellable_qty) {
                    switch (MISApp.settings.sellable_qty_action) {
                        case "Nothing":
                            break;
                        case "Warn":
                            frappe.msgprint(__(`Warning: Item <strong>${item_code}</strong> with Qty (${values.qty}) is higher than the Sellable Qty (${sellable_qty}) however your item got inserted successfully`), "MIS");
                            break;
                        case "Stop":
                            if (MISApp.canBypass) {
                                frappe.msgprint(__(`Warning: Item <strong>${item_code}</strong> with Qty (${values.qty}) is higher than the Sellable Qty (${sellable_qty}) however your item got inserted successfully`), "MIS");
                                break;
                            } else {
                                frappe.msgprint(__(`Cannot Insert: Item <strong>${item_code}</strong> with Qty (${values.qty}) is higher than the Sellable Qty (${sellable_qty})`), "MIS");
                                return;
                            }
                    }
                }

                frappe.run_serially([
                    () => row = itemsGrid.add_new_row(),
                    () => frappe.timeout(1.0),
                    async () => {
                        let args = {};
                        console.log(values);
                        
                        args["item_code"] = item_code;
                        args["qty"] = values.qty;
                        args["rate"] = selected_item.price_list_rate;

                        let warehouseFieldName = ""

                        if(cur_frm.doctype === DOCTYPES.STOCK_ENTRY) {
                            warehouseFieldName = "s_warehouse"
                        } else {
                            warehouseFieldName = "warehouse"
                        }

                        args[warehouseFieldName] = values.warehouse;

                        frappe.model.set_value(row.doctype, row.name, args);
                        
                        // TODO: check this workaround
                        setTimeout(() => {
                            row[warehouseFieldName] = warehouse;
                            frappe.model.set_value(row.doctype, row.name, args);
                            cur_frm.trigger(warehouseFieldName, row.doctype, row.name)
                        }, 1000)
                    }
                ]);
                frappe.show_alert(__("(MIS): Item Added!"));
                d.hide();
            }
        },
    );
    d.show();
    d.set_value("item_code", item_code);
    d.set_value("item_name", item_name);
    d.set_value("warehouse", warehouse);
    d.set_value("actual_qty", actual_qty);
    d.set_value("reserved_qty", reserved_qty);    
    d.set_value("sellable_qty", sellable_qty);

    if ($(document).width() > (MISApp.settings.wide_dialog_enable_on_screen_size ? MISApp.settings.wide_dialog_enable_on_screen_size : 1500)) {
        d.$wrapper.find('.modal-content').css({
            'width': '200%',
            'margin': '0 auto',     
            'left': '50%',
            'transform': 'translateX(-50%)'
        });
    }
}