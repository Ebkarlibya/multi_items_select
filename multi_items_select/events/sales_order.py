import frappe
from multi_items_select.api import get_can_bypass, get_customer_outstandings


def before_save(doc, method):
    if doc.customer:
        data = get_customer_outstandings(doc.customer)
        doc.mia_outstanding_amount = data["outstanding_amount"]
        doc.mia_total_outstanding_amount = data["total_outstanding_amount"]

    for item in doc.items:

        data = frappe.get_all(
            "Bin",
            fields=["item_code", "warehouse", "reserved_qty", "actual_qty"],
            filters={
                "item_code": item.get("item_code"),
                "warehouse": item.get("warehouse"),
            })

        if len(data) > 0:
            item.mis_reserved_qty = data[0].get("reserved_qty")
            item.mis_sellable_qty = data[0].actual_qty - data[0].reserved_qty


def before_submit(doc, method):
    mis_settings = frappe.get_single("Multi Select Settings")
    can_bypass = get_can_bypass()

    # so items
    for item in doc.items:
        data = frappe.get_all(
            "Bin",
            fields=["item_code", "warehouse", "reserved_qty", "actual_qty"],
            filters={
                "item_code": item.get("item_code"),
                "warehouse": item.get("warehouse"),
            })

        if len(data) > 0:
            item.mis_reserved_qty = data[0].get("reserved_qty")
            item.mis_sellable_qty = data[0].actual_qty - data[0].reserved_qty

            if item.qty > item.mis_sellable_qty:
                if (mis_settings.sellable_qty_action == "Warn"):
                    if not can_bypass:
                        frappe.msgprint(f"""
                        <p style="font-size: 12px; line-height: 14px;">
                            Warning, Item: ${item.item_code} in row: ({item.idx}) Qty ({item.qty})
                            is higher than Sellable Qty ({item.mis_sellable_qty}) in warehouse: ({item.warehouse})
                        </p>
                        """, "Warning", raise_exception=True)

                elif (mis_settings.sellable_qty_action == "Stop"):
                    if not can_bypass:
                        frappe.msgprint(f"""
                        <p style="font-size: 12px; line-height: 14px;">
                            Can't submit, Item {item.item_code} in row: ({item.idx}) Qty: ({item.qty})  
                            is higher than Sellable Qty ({item.mis_sellable_qty}) in warehouse: ({item.warehouse})
                        </p>
                        """, "Warning", raise_exception=True)
            pass
    #  so packed items
    if doc.packed_items:
        for item in doc.packed_items:
            data = frappe.get_all(
                "Bin",
                fields=["item_code", "warehouse",
                        "reserved_qty", "actual_qty"],
                filters={
                    "item_code": item.get("item_code"),
                    "warehouse": item.get("warehouse"),
                })

            if len(data) > 0:
                item.mis_reserved_qty = data[0].get("reserved_qty")
                item.mis_sellable_qty = data[0].actual_qty - \
                    data[0].reserved_qty

                if item.qty > item.mis_sellable_qty:
                    if (mis_settings.sellable_qty_action == "Warn"):
                        if not can_bypass:
                            frappe.msgprint(f"""
                            <p style="font-size: 12px; line-height: 14px;">
                                Warning, Packed Item: ${item.item_code} in row: ({item.idx}) Qty ({item.qty})
                                is higher than Sellable Qty ({item.mis_sellable_qty}) in warehouse: ({item.warehouse})
                            </p>
                            """, "Warning", raise_exception=True)

                    elif (mis_settings.sellable_qty_action == "Stop"):
                        if not can_bypass:
                            frappe.msgprint(f"""
                            <p style="font-size: 12px; line-height: 14px;">
                                Can't submit, Packed Item: ${item.item_code} in row: ({item.idx}) Qty: ({item.qty})  
                                is higher than Sellable Qty ({item.mis_sellable_qty}) in warehouse: ({item.warehouse})
                            </p>
                            """, "Warning", raise_exception=True)
                pass
