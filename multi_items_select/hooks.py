from . import __version__ as app_version

app_name = "multi_items_select"
app_title = "Multi Items Select"
app_publisher = "Ebkar"
app_description = "custom multi items insert for Sales Order items table"
app_email = "admin@ebkar.ly"
app_license = "MIT"

# Includes in <head>
# ------------------

# include js, css files in header of desk.html
# app_include_css = "/assets/multi_items_select/css/multi_items_select.css"
# app_include_js = "/assets/multi_items_select/js/multi_items_select.js"

# include js, css files in header of web template
# web_include_css = "/assets/multi_items_select/css/multi_items_select.css"
# web_include_js = "/assets/multi_items_select/js/multi_items_select.js"

# include custom scss in every website theme (without file extension ".scss")
# website_theme_scss = "multi_items_select/public/scss/website"

# include js, css files in header of web form
# webform_include_js = {"doctype": "public/js/doctype.js"}
# webform_include_css = {"doctype": "public/css/doctype.css"}

# include js in page
# page_js = {"page" : "public/js/file.js"}

# include js in doctype views
doctype_js = {
    "Item": "scripts/item.js",
    "Purchase Order": "scripts/purchase_order.js",
    "Purchase Invoice": "scripts/purchase_invoice.js",
    "Sales Order": "scripts/sales_order.js",
    "Sales Invoice": "scripts/sales_invoice.js",
    "Stock Entry": "scripts/stock_entry.js",
}

# doctype_list_js = {"doctype" : "public/js/doctype_list.js"}
# doctype_tree_js = {"doctype" : "public/js/doctype_tree.js"}
# doctype_calendar_js = {"doctype" : "public/js/doctype_calendar.js"}

# Home Pages
# ----------

# application home page (will override Website Settings)
# home_page = "login"

# website user home page (by Role)
# role_home_page = {
# "Role": "home_page"
# }

# Generators
# ----------

# automatically create page for each record of this doctype
# website_generators = ["Web Page"]

# Jinja
# ----------

# add methods and filters to jinja environment
# jinja = {
# "methods": "multi_items_select.utils.jinja_methods",
# "filters": "multi_items_select.utils.jinja_filters"
# }

# Installation
# ------------

# before_install = "multi_items_select.install.before_install"
# after_install = "multi_items_select.install.after_install"

# Uninstallation
# ------------

# before_uninstall = "multi_items_select.uninstall.before_uninstall"
# after_uninstall = "multi_items_select.uninstall.after_uninstall"

# Desk Notifications
# ------------------
# See frappe.core.notifications.get_notification_config

# notification_config = "multi_items_select.notifications.get_notification_config"

# Permissions
# -----------
# Permissions evaluated in scripted ways

# permission_query_conditions = {
# "Event": "frappe.desk.doctype.event.event.get_permission_query_conditions",
# }
#
# has_permission = {
# "Event": "frappe.desk.doctype.event.event.has_permission",
# }

# DocType Class
# ---------------
# Override standard doctype classes

# override_doctype_class = {
# "ToDo": "custom_app.overrides.CustomToDo"
# }

# Document Events
# ---------------
# Hook on document methods and events

doc_events = {
    "Stock Entry": {
        "on_update": "multi_items_select.events.stock_entry.on_update",
    },
    "Sales Order": {
        "before_save": "multi_items_select.events.sales_order.before_save",
        "before_submit": "multi_items_select.events.sales_order.before_submit",

    },
    "Sales Invoice": {
        "before_save": "multi_items_select.events.sales_invoice.before_save",
        "validate": "multi_items_select.events.sales_invoice.validate",
    }
}

# Scheduled Tasks
# ---------------

# scheduler_events = {
# "all": [
# "multi_items_select.tasks.all"
# ],
# "daily": [
# "multi_items_select.tasks.daily"
# ],
# "hourly": [
# "multi_items_select.tasks.hourly"
# ],
# "weekly": [
# "multi_items_select.tasks.weekly"
# ],
# "monthly": [
# "multi_items_select.tasks.monthly"
# ],
# }

# Testing
# -------

# before_tests = "multi_items_select.install.before_tests"

# Overriding Methods
# ------------------------------
#
# override_whitelisted_methods = {
# "frappe.desk.doctype.event.event.get_events": "multi_items_select.event.get_events"
# }
#
# each overriding function accepts a `data` argument;
# generated from the base implementation of the doctype dashboard,
# along with any modifications made in other Frappe apps
# override_doctype_dashboards = {
# "Task": "multi_items_select.task.get_dashboard_data"
# }

# exempt linked doctypes from being automatically cancelled
#
# auto_cancel_exempted_doctypes = ["Auto Repeat"]


# User Data Protection
# --------------------

# user_data_fields = [
# {
# "doctype": "{doctype_1}",
# "filter_by": "{filter_by}",
# "redact_fields": ["{field_1}", "{field_2}"],
# "partial": 1,
# },
# {
# "doctype": "{doctype_2}",
# "filter_by": "{filter_by}",
# "partial": 1,
# },
# {
# "doctype": "{doctype_3}",
# "strict": False,
# },
# {
# "doctype": "{doctype_4}"
# }
# ]

# Authentication and authorization
# --------------------------------

# auth_hooks = [
# "multi_items_select.auth.validate"
# ]

fixtures = [
    {
        "dt": "Custom Field",
        "filters": [
            ["fieldname", "in", (
                # Item
                "mis_has_packed_item",
                "mis_packed_items_section_58e2k",
                "mis_packed_items",
                "mia_item_desc_col_break_4123",
                "mia_item_sub_category",
                "mia_item_option",

                # Sales Order & Sales Invoice
                "mia_outstanding_amount",
                "mia_total_outstanding_amount",

                # Sales Order Item & Packed Item
                "mis_sellable_qty",
                "mis_reserved_qty"
            )]
        ]
    }
]
