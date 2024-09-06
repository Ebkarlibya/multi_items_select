// Copyright (c) 2022, Ebkar and contributors
// For license information, please see license.txt

frappe.ui.form.on('Multi Select Settings', {
	refresh: function(frm) {
		if(frm.doc.dialog_open_and_collapse_keyboard_shortcut_key) {
			let openCollapseKeyDesc = `Press (Shift+${frm.doc.dialog_open_and_collapse_keyboard_shortcut_key}) to open & collapse dialog`
			frm.set_df_property("dialog_open_and_collapse_keyboard_shortcut_key", "description", openCollapseKeyDesc)
		}
	},
	validate: function(frm) {
		if(frm.doc.dialog_open_and_collapse_keyboard_shortcut_key) {
			if(frm.doc.dialog_open_and_collapse_keyboard_shortcut_key.length > 1) {
				frappe.throw("Shortcut Key must be 1 capital letter like D or M")
			}
			frm.doc.dialog_open_and_collapse_keyboard_shortcut_key = frm.doc.dialog_open_and_collapse_keyboard_shortcut_key.toUpperCase()
		}
	}
});
