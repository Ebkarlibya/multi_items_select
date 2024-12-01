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