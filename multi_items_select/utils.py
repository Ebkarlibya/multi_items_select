import frappe
from frappe.model.document import Document


def get_mis_settings() -> Document:
    return frappe.get_single("Multi Select Settings")

def get_search_price_list(settings: Document, customer: str) -> str | None:
    if settings.price_list_from_customer and customer:
        default_price_list = frappe.db.get_value(
            "Customer",
            filters={"name": customer},
            fieldname="default_price_list",
            # pluck="default_price_list"
        )

        return default_price_list
    else:
        return settings.item_price_listing
    
def get_docs_access_perms(doctype: str, name: str = "") -> list[str] | str:
    """ get list of doctype allowed records or check against single record and return it if allowed """

    allowed_entries = frappe.get_list(doctype)
    allowed_entries = [entry.name for entry in allowed_entries]
    
    if name and name in allowed_entries:
        return name
    else:
        return allowed_entries


def create_sql_array(l: list):
    list_string = "("

    for idx, itm in enumerate(l):
        list_string += f"'{itm}'"

        if idx + 1 == len(l):
            list_string += f")"
        else:
            list_string += f", "

    return list_string