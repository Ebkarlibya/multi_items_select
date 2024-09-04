

export const getSettings = async () => {
    let mis_settings = await frappe.call({
        method: "multi_items_select.api.get_settings",
    });
    return mis_settings.message;
}

export const getCanBypass = async () => {
    let can_bypass = await frappe.call({
        method: "multi_items_select.api.get_can_bypass",
    });
    return can_bypass.message;
}

export const misSleep = (time) => {
    return new Promise(resolve => setTimeout(() => resolve(), time))
}

export const highlightField = (frm, fieldname) => {
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