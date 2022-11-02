import frappe

def on_update(doc, method):
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
