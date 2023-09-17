import frappe
from multi_items_select.api import get_can_bypass, get_customer_outstandings


def before_save(doc, method):
    if doc.customer:
        data = get_customer_outstandings(doc.customer)
        doc.mia_outstanding_amount = data["outstanding_amount"]
        doc.mia_total_outstanding_amount = data["total_outstanding_amount"]
