// import misDialog from "../dialogs/mis_dialog"

export const misSetSelectedItem = async (item_code) => {
    window.MISApp.misSelectedItem = item
}

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

    // let control_element = $el.closest(".frappe-control");

    // control_element.addClass("highlight");
    // control_element.css("background-color", "#FFB0B6"); // Lighter red color
    // setTimeout(() => {
        // control_element.removeClass("highlight");
        // control_element.css("background-color", "");
    // }, 2000);
    return true;
}

export const setupRealtimeSettingUpdate = (settings, frm) => {
    frappe.realtime.on("mis_settings_update", async () => {
        if (cur_dialog && cur_dialog.title === __(settings.mis_dialog_title)) {
        frappe.show_alert("Settings Update, Refreshing...")
            localStorage.setItem("mis_reopen", true)
            await misSleep(2000)
            location.reload()
        }
    })
    
}

export const setupDialogToggle = (settings, frm) => {    
    if(!settings.dialog_open_keyboard_shortcut_key) return;
    $(document).keypress(settings.dialog_open_keyboard_shortcut_key, async function (e) {
        
        if (e.shiftKey && e.target == document.body && !cur_dialog && e.originalEvent.key === settings.dialog_open_keyboard_shortcut_key) {
            console.log(e);
            if (!cur_dialog) {
                frappe.show_alert("Opening MIS Dialog....")
                highlightField(frm, "items")
                await misSleep(800);
                MISApp.misDialog(frm)
            } else {
                // TODO: strange issue
                // cur_dialog.hide()
                // cur_dialog.get_close_btn().click()                
            }
        }
    });
}

export const itemsResultCountInfo = (data) => {
    let total = 0
    let isStock = 0
    let isNonStock = 0
    let instock = 0
    let outofstock = 0

    for (let item in data) {
        total += 1

        if (item.is_stock_item) {
            isStock += 1
        } else {
            isNonStock += 1
        }

        if (item.actual_qty > 0) {
            instock += 1
        } else {
            outofstock += 1
        }

    }
    return `<b>Total: ${total}</b>, Is Stock: <b>${isStock}</b>, Non Stock: <b>${isNonStock}</b>, In Stock: <b>${instock}</b>, Out of Stock: <b>${outofstock}</b>`;
}

