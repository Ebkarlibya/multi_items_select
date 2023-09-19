import frappe
from frappe.utils import fmt_money
from multi_items_select.api import get_can_bypass, get_customer_outstandings


def before_save(doc, method):
    if doc.customer:
        data = get_customer_outstandings(doc.customer)
        doc.mia_outstanding_amount = data["outstanding_amount"]
        doc.mia_total_outstanding_amount = data["total_outstanding_amount"]

    settings = frappe.get_single("Multi Select Settings")

    if doc.mia_total_outstanding_amount > settings.max_allowed_customer_total_outstanding and settings.max_allowed_customer_total_outstanding > 0:
        frappe.throw(f"""
Total Allowed Outstandings for Customer ({doc.customer}) is over the allowed amount. <br>
Customer Total Outstandings: ({fmt_money(doc.mia_total_outstanding_amount)}) / Total Allowed: ({fmt_money(settings.max_allowed_customer_total_outstanding)})
""")


def validate(doc, method):
    pass
