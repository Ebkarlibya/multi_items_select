
frappe.ui.form.on("Item", {
    mis_has_packed_item: function(frm) {
        if(frm.doc.mis_has_packed_item) {
            frm.set_df_property("mis_packed_items_section_58e2k", "hidden", false)
            frm.set_df_property("mis_packed_items", "hidden", false)
            frm.set_df_property("mis_packed_items", "reqd", true)

            if(frm.doc.mis_packed_items.length < 1) {
                highlight_field(frm, "mis_packed_items")
            }

        } else {
            frm.set_df_property("mis_packed_items_section_58e2k", "hidden", true)
            frm.set_df_property("mis_packed_items", "hidden", true)
            frm.set_df_property("mis_packed_items", "reqd", false)

        }
    },
    refresh: function(frm) {
        if(frm.doc.mis_has_packed_item) {
            frm.set_df_property("mis_packed_items_section_58e2k", "hidden", false)
            frm.set_df_property("mis_packed_items", "hidden", false)
            frm.set_df_property("mis_packed_items", "reqd", true)

            frm.set_query("item", "mis_packed_items", function(frm, cdt, cdn) {
                return {
                    filters: {
                        "mis_has_packed_item": false
                    }
                }
            })

        } else {
            frm.set_df_property("mis_packed_items_section_58e2k", "hidden", true)
            frm.set_df_property("mis_packed_items", "hidden", true)
            frm.set_df_property("mis_packed_items", "reqd", false)

        }
    },
    validate: function(frm) {
        if(frm.doc.mis_has_packed_item && frm.doc.is_stock_item) {
            frappe.validated = false
            frappe.msgprint(__(`Item <strong>${frm.doc.item_code}</strong> Cannot be both maintain stock & packed item.`), "Multi Items Select");

        }
    }
});


// frappe.ui.form.on("MIS Packed Item Table", {
//     item: function(frm) {
//         console.log("add item");
//     },
// })



function highlight_field(frm, fieldname) {
	let field = frm.get_field(fieldname);
	if (!field) return;

	let $el = field.$wrapper;

	// set tab as active
	if (field.tab && !field.tab.is_active()) {
		field.tab.set_active();
	}

	if (field.section.is_collapsed()) {
		field.section.collapse(false);
	}

	frappe.utils.scroll_to($el, true, 15);

	let control_element = $el.closest(".frappe-control");

    // control_element.addClass("highlight");
	control_element.css("background-color", "#FFB0B6"); // Lighter red color
	setTimeout(() => {
		// control_element.removeClass("highlight");
		control_element.css("background-color", "");
	}, 7000);
	return true;
}