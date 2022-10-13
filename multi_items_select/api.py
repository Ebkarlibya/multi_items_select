from this import d
import frappe

@frappe.whitelist(allow_guest=False)
def get_settings():
    data =  frappe.get_single("Multi Select Settings")
    return data


@frappe.whitelist(allow_guest=False)
def get_items_reserved_qty():
    # mis_settings = frappe.db.get_single("Multi Select Settings")
    # if mis_settings.sellable_qty_action == "Stop" and mis_settings.sellable_bypass_role not in frappe.get_roles():
        
    #     return False

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

    sql_item_name_cond = ""
    sql_warehouse_cond = ""

    # filters_cond = {
    #     "item_code": ("like", f"%{search_term}%"),
    # }

    if search_term:
        escaped_input = frappe.db.escape(f"%{search_term}%")
        sql_item_name_cond = f"and i.item_code LIKE {escaped_input} or i.item_name LIKE {escaped_input}"

    if source_warehouse:
        escaped_input = frappe.db.escape(source_warehouse)
        sql_warehouse_cond = f"AND b.warehouse = {escaped_input}"

    data = frappe.db.sql(f"""
        select i.item_code, i.item_name, b.warehouse,
        b.actual_qty, b.reserved_qty, b.planned_qty, b.stock_uom

        from `tabBin` b
        inner join  `tabItem` i
        on i.item_code = b.item_code
        {sql_item_name_cond}
        {sql_warehouse_cond}

        order by b.warehouse asc, i.item_code asc
        limit 100;
    """, as_dict=True)

    return data

@frappe.whitelist(allow_guest=False)
def get_can_bypass():
    mis_settings = frappe.get_single("Multi Select Settings")
    roles = frappe.get_roles(username=frappe.session.user)
    if mis_settings.sellable_bypass_role not in roles:
        return False
    return True
