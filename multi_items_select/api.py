from this import d
import frappe

@frappe.whitelist(allow_guest=False)
def get_settings():
    data =  frappe.get_single("Multi Select Settings")
    return data


@frappe.whitelist(allow_guest=False)
def get_items_reserved_qty():
    if frappe.db.get_value("Multi Select Settings", None, fieldname="fetch_so_items_reserved_qty") == "0":
        return False

    source_warehouse = frappe.form_dict.get('source_warehouse')
    raw_codes = frappe.form_dict.get('item_codes')
    item_codes = frappe.parse_json(raw_codes)

    data = None

    data = frappe.get_all(
        "Bin",
        fields=["item_code", "warehouse", "reserved_qty", "actual_qty"],
        filters={
            "warehouse": source_warehouse,
            "item_code": ("in", item_codes),
        })

    return data

@frappe.whitelist(allow_guest=False)
def get_multiple_items():

    source_warehouse = frappe.form_dict.get('source_warehouse')
    search_term = frappe.form_dict.get("search_term")

    filters_cond = {
        "item_code": ("like", f"%{search_term}%"),
    }

    if source_warehouse:
        filters_cond["warehouse"] = source_warehouse

    data = frappe.get_all(
        "Bin",
        fields=["item_code", "warehouse", "reserved_qty",
                "actual_qty", "projected_qty"],
        filters=filters_cond,
        order_by="warehouse asc, item_code asc",
        limit=100
    )

    for item in data:
        item["item_name"] = frappe.db.get_value(
            "Item", item.item_code, "item_name")

    return data
