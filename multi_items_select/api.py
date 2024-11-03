import json
import frappe
from erpnext.accounts.utils import get_balance_on
from multi_items_select.__init__ import __version__ as version

@frappe.whitelist(allow_guest=False)
def get_settings():
    settings = frappe.get_cached_doc("Multi Select Settings")
    settings = settings.as_dict()
    settings["mis_dialog_title"] = f"Multi Item Select"
    
    return settings


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
    mis_settings = frappe.get_single("Multi Select Settings")

    search_term  = frappe.form_dict.get("search_term")
    compat_make  = frappe.form_dict.get("compat_make")
    compat_model = frappe.form_dict.get("compat_model")
    compat_year  = frappe.form_dict.get("compat_year")
    compat_notes = frappe.form_dict.get("compat_notes")

    has_compat_filters = any([compat_make, compat_model, compat_year, compat_notes])
    
    include_non_stock = json.loads(frappe.form_dict.get("include_non_stock"))
    exclude_out_of_stock_items = json.loads(
        frappe.form_dict.get("exclude_out_of_stock_items"))
    only_mis_packed_items = json.loads(
        frappe.form_dict.get("only_mis_packed_items"))
    warehouse = frappe.form_dict.get('warehouse')
    item_group = frappe.form_dict.get("item_group")
    brand = frappe.form_dict.get("brand")
    item_option = frappe.form_dict.get("item_option")
    item_sub_category = frappe.form_dict.get("item_sub_category")
    tag = frappe.form_dict.get("tag")

    escaped_search_term = frappe.db.escape(search_term)
    # escaped_search_term = "'%" + \
    #     escaped_search_term[1:len(escaped_search_term) - 1] + "%'"

    sql_filters = {}

    if search_term:
        sql_filters["sql_term"] = f"and (i.item_code like concat('%%', {escaped_search_term}, '%%'))"
        sql_filters["sql_term"] = f"and (i.item_code like concat('%%', {escaped_search_term}, '%%') or i.item_name like concat('%%', {escaped_search_term}, '%%') or ibc.barcode like concat('%%', {escaped_search_term}, '%%'))"
        

    if compat_make:
        sql_filters["sql_compat_make"] = f"and vehCompat.make = {frappe.db.escape(compat_make)}"

    if compat_model:
        sql_filters["sql_compat_model"] = f"and vehCompat.model = {frappe.db.escape(compat_model)}"

    if compat_year:
        sql_filters["sql_compat_year"] = f"and vehCompat.year = {frappe.db.escape(compat_year)}"

    if compat_notes:
        sql_filters["sql_compat_notes"] = f"and vehCompat.notes like concat('%%', {frappe.db.escape(compat_notes)},'%%')"

    if warehouse:
        sql_filters["sql_warehouse"] = f"and b.warehouse = {frappe.db.escape(warehouse)}"

    if item_group:
        sql_filters["sql_item_group"] = f"and i.item_group = {frappe.db.escape(item_group)}"

    if brand:
        sql_filters["sql_brand"] = f"and i.brand = {frappe.db.escape(brand)}"

    if item_option:
        sql_filters[
            "sql_item_option"] = f"and i.mia_item_option = {frappe.db.escape(item_option)}"

    if item_sub_category:
        sql_filters[
            "sql_item_sub_category"] = f"and i.mia_item_sub_category = {frappe.db.escape(item_sub_category)}"

    if tag:
        sql_filters[
            "sql_mis_tag"] = f"and misTag.tag = {frappe.db.escape(tag)}"

    data = frappe.db.sql(f"""
        select i.item_code, i.item_name, i.mis_has_packed_item, i.item_group, i.brand, i.is_stock_item,
        i.image, i.mia_item_option, i.mia_item_sub_category, i.tors_has_part_compatibility,
        b.warehouse, b.reserved_qty, b.actual_qty, b.projected_qty, b.ordered_qty, b.stock_uom
        {', ipc.price_list, ipc.price_list_rate, ipc.currency' if mis_settings.item_price_listing else '' }
        {', misTag.tag' if mis_settings.enable_tag_filter else '' }
        from `tabItem` i 
            { 'left' if include_non_stock else 'inner' } join `tabBin` b   
                on i.item_code = b.item_code
            left join `tabItem Barcode` ibc
                on i.item_code = ibc.parent
            {'''
            left join `tabItem Price` ipc
                on i.item_code = ipc.item_code
            ''' if mis_settings.item_price_listing else ''}
            {'''
            left join `tabMulti Select Tag Item Table` misTag
                on i.item_code = misTag.parent
            ''' if mis_settings.enable_tag_filter else ''}
            
            {'''
                left join `tabTors Part Compatibility Table` vehCompat
                    on i.item_code = vehCompat.parent
            ''' if has_compat_filters else ''}

        where i.disabled = 0

        {sql_filters.get('sql_term', '')}

        {'and if(i.is_stock_item, (b.warehouse <> "" and b.actual_qty > 0), 1)' if exclude_out_of_stock_items else '' }
        {'and i.is_stock_item = 1' if not include_non_stock else '' }
        {'and i.mis_has_packed_item = 1' if only_mis_packed_items else '' }
        {'and ipc.price_list = "' + mis_settings.item_price_listing + '"' if mis_settings.item_price_listing else '' }


        {sql_filters.get('sql_compat_make', '')}
        {sql_filters.get('sql_compat_model', '')}
        {sql_filters.get('sql_compat_year', '')}
        {sql_filters.get('sql_compat_notes', '')}

        {sql_filters.get('sql_warehouse', '')}
        {sql_filters.get('sql_item_group', '')}
        {sql_filters.get('sql_brand', '')}
        {sql_filters.get('sql_item_option', '')}
        {sql_filters.get('sql_item_sub_category', '')}
        {sql_filters.get('sql_mis_tag', '')}

        -- group by b.warehouse

        order by i.item_code, i.item_name, b.warehouse

        limit {20 if not search_term else 10000}
    """, {"compat_make": compat_make}, as_dict=True, debug=True)

    return data


@frappe.whitelist(allow_guest=False)
def get_packed_items():
    packed_item_code = frappe.form_dict["packed_item_code"]

    mis_packed_items = frappe.get_all(
        "MIS Packed Item Table",
        fields=["item_code"],
        filters={
            "parent": packed_item_code,
            "enabled": True
        },
        order_by="idx"
    )

    packed_items = []
    # , (select image from `tabItem` where item_code = mpi.item_code) image
    for packed_item in mis_packed_items:
        packed_item_data = frappe.db.get_value(
            "Item",
            filters={
                "item_code": packed_item["item_code"]
            },
            fieldname=["disabled", "item_name", "image"],
            as_dict=True
        )

        if packed_item_data["disabled"]:
            continue

        _packed_items = frappe.db.sql(
            f"""
                select mpi.item_code, mpi.qty, mpi.enabled, b.warehouse, b.reserved_qty, b.actual_qty, b.projected_qty, b.ordered_qty,
                (b.actual_qty - b.reserved_qty) sellable_qty, b.stock_uom
                
                from `tabMIS Packed Item Table` mpi left join `tabBin` b
                on mpi.item_code = b.item_code

                where mpi.item_code = {frappe.db.escape(packed_item["item_code"])}

            """, as_dict=True, debug=False
        )

        _packed_items[0]["item_name"] = packed_item_data.get("item_name")
        _packed_items[0]["image"] = packed_item_data.get("image")

        packed_items.append(_packed_items[0])

    return packed_items


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


@frappe.whitelist(allow_guest=False)
def get_item_compat_details(item_code: str):

    compat_list = frappe.get_all(
        "Tors Part Compatibility Table",
        fields=["make", "model", "year", "notes"],
        filters={
            "parent": item_code
        },
        order_by="make, model, year asc"
    )

    return compat_list
