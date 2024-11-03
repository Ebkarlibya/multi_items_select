import { DOCTYPES } from "./utils/mis_enums.js"
import { getSettings, getCanBypass, misSetSelectedItem, setupRealtimeSettingUpdate, setupDialogToggle, highlightField } from "./utils/helpers.js";
import misDialog from "./dialogs/mis_dialog.js";
import addItemDialog from "./dialogs/add_item_dialog.js";
import addPackedItemDialog from "./dialogs/add_packed_item_dialog.js";
import scannerDialog from "./dialogs/scanner_dialog.js";
import compatDialog from "./dialogs/compat_dialog.js"

frappe.provide("MISApp")

$(document).on('app_ready', function () {
    for (let k in DOCTYPES) {
        const DOC = DOCTYPES[k]
        const METHODS = {
            setup: async function (frm) {
                let settings = await getSettings()
                if (!settings.enabled) return

                // register namespaces & services
                MISApp.settings = settings
                MISApp.canBypass = await getCanBypass()
                MISApp.misDialog = misDialog
                MISApp.misDialogCollapsed = false
                MISApp.misToggleDialogCollapse = null;
                MISApp.misLastSearchData = null;
                MISApp.misSetSelectedItem = misSetSelectedItem;
                MISApp.addItemDialog = addItemDialog
                MISApp.addPackedItemDialog = addPackedItemDialog
                MISApp.scannerDialog = scannerDialog
                MISApp.compatDialog = compatDialog

                setupRealtimeSettingUpdate(settings, frm)
                setupDialogToggle(settings, frm)
                // setTimeout(() => {
                //     MISApp.misDialog(frm)
                // }, 1000)

            },
            refresh: async function (frm) {
                let settings = await getSettings() // TODO: using settings from setup ?

                if (!settings.enabled) return;
                if (frm.doc.docstatus === 1) return;

                
                const itemsGrid = frm.get_field("items").grid;        
        
                if (settings.disable_original_add_multi) {
                    if (itemsGrid.grid_buttons.find(".grid-add-multiple-rows")) {
                        itemsGrid.grid_buttons.find(".grid-add-multiple-rows").remove();
                    }
                }

                if(settings.enable_qrcodebarcode_direct_scanner_button) {
                    setupScannerButton(frm)
                }

                // register table custom button
                const cbtn = frm.fields_dict["items"].grid.add_custom_button(__("MIS Insert"), function () {
                    misDialog(frm)
                }).addClass("btn-primary");



                if (localStorage.getItem("mis_reopen")) {
                    misDialog(frm)
                    highlightField(frm, "items")
                    localStorage.removeItem("mis_reopen")
                }
                // misDialog(frm)
                compatDialog("000002", "wh1")

            },
        }

        // if we want to add handler for specific doctype
        if (DOC === DOCTYPES.SALES_INVOICE) {
            METHODS["custom_sales_type"] = function (frm) {
                console.log(`custom field is on sales invoice`, frm);
            }
        }

        frappe.ui.form.on(DOC, METHODS);
    }
});


function setupScannerButton(frm) {
    let scannerBtn = frm.add_custom_button("MIS Scanner", () => {
        misDialog(frm, true)
    })    
    scannerBtn.html(`
            <i class="qrcode-icon-custom-btn fa fa-qrcode" style="font-size: 24px" ></i>
        `
    )
}
