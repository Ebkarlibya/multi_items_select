import frappe


def on_update(doc, method):
    mis_settings = frappe.get_single("Multi Select Settings")
    if not mis_settings.enabled: return

    if "mis_skip_sellable_check" in frappe.flags:
        del frappe.flags["mis_skip_sellable_check"]
        return

    if doc.stock_entry_type == "Material Transfer":
        for item in doc.items:
            item_stock_data = frappe.get_all(
                "Bin",
                fields=["actual_qty", "reserved_qty"],
                filters={
                    "warehouse": item.s_warehouse,
                    "item_code": item.item_code,
                },
            )
            if len(item_stock_data) > 0:
                data = item_stock_data[0]
                transferable_qty = data.actual_qty - data.reserved_qty
                if hasattr(doc, 'masm_device_maintenance_card'):
                    if doc.masm_device_maintenance_card:
                        continue

                if int(item.qty) > transferable_qty:
                    frappe.msgprint(
                        f"Item <string>{item.item_code}</strong> Qty ({item.qty}) is higher than the Transferable Qty ({transferable_qty}) at row {item.idx}",
                        "Message",
                        raise_exception=True
                    )