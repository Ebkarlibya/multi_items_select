import frappe
from erpnext.accounts.utils import get_balance_on


@frappe.whitelist(allow_guest=False)
def get_settings():
    data = frappe.get_single("Multi Select Settings")
    return data


@frappe.whitelist(allow_guest=False)
def get_items_reserved_qty():
    # mis_settings = frappe.db.get_single("Multi Select Settings")
    # if mis_settings.sellable_qty_action == "Stop" and mis_settings.sellable_bypass_role not in frappe.get_roles():

    #     return False

    source_warehouse = frappe.form_dict.get('source_warehouse')
    raw_codes = frappe.form_dict.get('item_codes')
    item_codes = frappe.parse_json(raw_codes)

    result = []

    for item in item_codes:
        data = frappe.get_all(
            "Bin",
            fields=["item_code", "warehouse", "reserved_qty", "actual_qty"],
            filters={
                "warehouse": item.get("warehouse"),
                "item_code": item.get("item_code"),
            })
        result.append(data)

    return result

# @frappe.whitelist(allow_guest=False)
# def get_multiple_items():

#     source_warehouse = frappe.form_dict.get('source_warehouse')
#     search_term = frappe.form_dict.get("search_term")

#     sql_item_name_cond = ""
#     sql_warehouse_cond = ""

#     if search_term:
#         escaped_input = frappe.db.escape(f"%{search_term}%")
#         sql_item_name_cond = f"where i.item_code LIKE {escaped_input} or i.item_name LIKE {escaped_input}"

#     if source_warehouse:
#         escaped_input = frappe.db.escape(source_warehouse)
#         sql_warehouse_cond = f"and b.warehouse = {escaped_input}"

#     data = frappe.db.sql(f"""
#         select i.item_code, i.item_name, b.warehouse,
#         b.actual_qty, b.reserved_qty, b.planned_qty, b.stock_uom

#         from `tabBin` b
#         inner join  `tabItem` i
#         on i.item_code = b.item_code
#         {sql_item_name_cond}
#         {sql_warehouse_cond}

#         order by warehouse asc, item_code asc
#         limit 100;
#     """, as_dict=True, debug=True)

#     return data


@frappe.whitelist(allow_guest=False)
def get_multiple_items():

    search_term = frappe.form_dict.get("search_term")
    warehouse = frappe.form_dict.get('source_warehouse')
    item_group = frappe.form_dict.get("item_group")
    brand = frappe.form_dict.get("brand")
    item_option = frappe.form_dict.get("item_option")
    item_sub_category = frappe.form_dict.get("item_sub_category")

    escaped_search_term = frappe.db.escape(search_term)
    escaped_search_term = "'%" + \
        escaped_search_term[1:len(escaped_search_term) - 1] + "%'"

    sql_filters = {
        "sql_term": f"where (i.item_code like {escaped_search_term} or i.item_name like {escaped_search_term})",
    }

    if warehouse:
        sql_filters["sql_warehouse"] = f"and b.warehouse = {frappe.db.escape(warehouse)}"

    if item_group:
        sql_filters["sql_item_group"] = f"and i.item_group = {frappe.db.escape(item_group)}"

    if brand:
        sql_filters["sql_brand"] = f"and i.brand = {frappe.db.escape(brand)}"

    if item_option:
        sql_filters["sql_item_option"] = f"and i.item_option = {frappe.db.escape(item_option)}"

    if item_sub_category:
        sql_filters[
            "sql_item_sub_category"] = f"and i.item_sub_category = {frappe.db.escape(item_sub_category)}"

    data = frappe.db.sql(f"""
        select i.item_code, i.item_name, i.item_group, i.brand, i.mia_item_option, i.mia_item_sub_category,
        b.warehouse, b.reserved_qty, b.actual_qty, b.projected_qty, b.stock_uom
        
        from `tabItem` i inner join `tabBin` b        
        on i.item_code = b.item_code

        {sql_filters.get('sql_term', '')}
        {sql_filters.get('sql_warehouse', '')}
        {sql_filters.get('sql_item_group', '')}
        {sql_filters.get('sql_brand', '')}
        {sql_filters.get('sql_item_option', '')}
        {sql_filters.get('sql_item_sub_category', '')}

                         
        order by b.item_code, b.warehouse
                          
        limit {15 if not search_term else 100000000}
    """, as_dict=True, debug=True)

    return data


@frappe.whitelist(allow_guest=False)
def get_can_bypass():
    mis_settings = frappe.get_single("Multi Select Settings")
    roles = frappe.get_roles(username=frappe.session.user)
    if mis_settings.sellable_bypass_role not in roles:
        return False
    return True


@frappe.whitelist(allow_guest=False)
def get_customer_outstandings(customer: str):

    outstanding_amount = get_balance_on(
        party=customer, party_type="Customer", date=frappe.utils.nowdate())

    data = frappe.db.sql("""
        SELECT sum(outstanding_amount) as total_outstanding_amount
        FROM `tabSales Invoice`
        WHERE customer = %s
        and status = 'Overdue'
    """, (customer), as_dict=True)[0]

    data["outstanding_amount"] = outstanding_amount

    return data
