import frappe
from erpnext.accounts.utils import get_balance_on

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

    source_warehouse = frappe.form_dict.get('source_warehouse')
    search_term = frappe.form_dict.get("search_term")
    item_group = frappe.form_dict.get("item_group")
    brand = frappe.form_dict.get("brand")
    item_option = frappe.form_dict.get("item_option")
    item_sub_category = frappe.form_dict.get("item_sub_category")

    filters_cond = {
        # "item_code": ("like", f"%{search_term}%"),
    }

    if source_warehouse:
        filters_cond["warehouse"] = source_warehouse

    _data = frappe.get_all(
        "Bin",
        fields=["item_code", "warehouse", "reserved_qty",
                "actual_qty", "projected_qty", "stock_uom"],
        filters=filters_cond,
        order_by="warehouse asc, item_code asc",
    )

    data = []

    for item in _data:

        item["item_name"] = frappe.db.get_value(
            "Item", item.item_code, "item_name")
        item["item_group"] = frappe.db.get_value(
            "Item", item.item_code, "item_group")
        item["brand"] = frappe.db.get_value(
            "Item", item.item_code, "brand")
        item["item_option"] = frappe.db.get_value(
            "Item", item.item_code, "item_option")
        item["item_sub_category"] = frappe.db.get_value(
            "Item", item.item_code, "item_sub_category")
        
        
        if item_group and item_group != item["item_group"]:
            continue
        if brand and brand != item["brand"]:
            continue
        if item_option and item_option != item["item_option"]:
            continue
        if item_sub_category and item_sub_category != item["item_sub_category"]:
            continue

        if search_term:
            if search_term.lower() in item.item_name.lower():
                data.append(item)
            else:
                continue
        else:
            data.append(item)

    return data


@frappe.whitelist(allow_guest=False)
def get_can_bypass():
    mis_settings = frappe.get_single("Multi Select Settings")
    roles = frappe.get_roles(username=frappe.session.user)
    if mis_settings.sellable_bypass_role not in roles:
        return False
    return True


@frappe.whitelist(allow_guest=False)
def get_customer_outstandings():

    customer = frappe.form_dict.get('customer')

    outstanding_amount = get_balance_on(party=customer, party_type="Customer", date=frappe.utils.nowdate())

    data = frappe.db.sql("""
        SELECT sum(outstanding_amount) as total_outstanding_amount
        FROM `tabSales Invoice`
        WHERE customer = %s
        and status = 'Overdue'
    """, (customer), as_dict=True)[0]

    data["outstanding_amount"] = outstanding_amount

    return data