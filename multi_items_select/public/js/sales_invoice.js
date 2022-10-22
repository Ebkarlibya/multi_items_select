frappe.ui.form.on("Sales Invoice", {
    // refresh: function(frm) {
    // },
    customer: function(frm) {
        if (frm.doc.customer) {
            frappe.call({
                method: "multi_items_select.api.get_customer_outstandings",
                args: {
                    customer: frm.doc.customer
                },
                callback: function(r) {
                    frappe.model.set_value(frm.doctype, frm.docname, "mia_outstanding_amount", r.message.outstanding_amount);
                    frappe.model.set_value(frm.doctype, frm.docname, "mia_total_outstanding_amount", r.message.total_outstanding_amount);
                }
            });
        }
    }
});