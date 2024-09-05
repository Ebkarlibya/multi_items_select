import DOCTYPES from "./utils/mis_enums.js"
import { getSettings, getCanBypass, misSleep, highlightField, misSetSelectedItem } from "./utils/helpers.js";

import misDialog from "./dialogs/mis_dialog.js";
import addItemDialog from "./dialogs/add_item_dialog.js";
import addPackedItemDialog from "./dialogs/add_packed_item_dialog.js";
import scannerDialog from "./dialogs/scanner_dialog.js";

frappe.provide("MISApp")

$(document).on('app_ready', function () {
    for (let k in DOCTYPES) {
        const DOC = DOCTYPES[k]
        const METHODS = {
            setup: async function (frm) {
                // TODO: optimize backend fetch
                let settings = await getSettings()
                let canBypass = await getCanBypass()

                if (!settings.enabled) return

                MISApp.settings = settings
                MISApp.canBypass = canBypass
                MISApp.misDialog = misDialog
                MISApp.misLastSearchData = null;
                MISApp.misSetSelectedItem = misSetSelectedItem;
                MISApp.addItemDialog = addItemDialog
                MISApp.addPackedItemDialog = addPackedItemDialog
                MISApp.scannerDialog = scannerDialog
                // add item row
                // frm.mis_add_item_row

                // listen for update event
                frappe.realtime.on("mis_settings_update", async () => {
                    frappe.show_alert("Settings Update, Refreshing...")
                    if(cur_dialog && cur_dialog.title === __(settings.mis_dialog_title)) {
                        localStorage.setItem("mis_reopen", true)
                    }
                    await misSleep(2000)
                    location.reload()
                })
                if(localStorage.getItem("mis_reopen")) {
                    misDialog(settings, frm)
                    highlightField(frm, "items")
                    localStorage.removeItem("mis_reopen")
                }
            },
            refresh: async function (frm) {
                let settings = await getSettings()

                if (!settings.enabled) return;
                if (frm.doc.docstatus === 1) return;

                
                const itemsGrid = frm.get_field("items").grid;        
        
                if (settings.disable_original_add_multi) {
                    if (itemsGrid.grid_buttons.find(".grid-add-multiple-rows")) {
                        itemsGrid.grid_buttons.find(".grid-add-multiple-rows").remove();
                    }
                }
                // register table custom button
                const cbtn = frm.fields_dict["items"].grid.add_custom_button(__("MIS Insert"), function () {
                    if (!frm.doc.customer) {
                        frappe.show_alert(__("(MIS): Please select customer first"));
                        return
                    }
                    MISApp.misDialog(settings, frm)
                
                });
                cbtn.addClass("btn-primary");
                // highlightField(frm, "items")
                setTimeout(() => MISApp.misDialog(settings, frm), 1000)
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




// cur_frm.misOpenScanner = async function (searchDialog) {
//     let areaID = `qr-code-full-region-${Math.round(Math.random() * 1000)}`
//     let scanner = undefined
//     let d = new frappe.ui.Dialog({
//         title: __("(MIS): Scan Barcode / QRCode"),
//         type: "large",
//         fields: [{
//             fieldname: "qr-code-barcode",
//             fieldtype: "HTML",
//             options: `
//                 <div id="${areaID}">Loading....</div>
//                 <style>
//                     .modal-content {
//                         width: fit-content
//                     }
//                 </style>
//             `
//         },],
//         primary_action_label: __("Stop Scanning"),
//         primary_action: async function () {
//             await scanner.clear()
//             scanner = undefined
//             d.hide();
//         },
//     });

//     d.show();

//     var config = {
//         fps: 60,

//         qrbox: {
//             width: 500,
//             height: 300
//         },
//         supportedScanTypes: [Html5QrcodeScanType.SCAN_TYPE_CAMERA]
//     };

//     setTimeout(() => {
//         scanner = new Html5QrcodeScanner(areaID, config, false);
//         scanner.render(async (barcode) => {
//             console.log('success', barcode);
//             searchDialog.set_value("search_term", barcode)
//             searchDialog.get_field("search_term").wrapper.querySelector("input").dispatchEvent(new Event('input'))
//             await scanner.clear()
//             scanner = undefined
//             d.hide();
//             frappe.utils.play_sound("submit")
//             // beep.volume = 1
//             // beep.play()
//         }
//             , (d1, d2) => {// console.log('error', d1, d2);
//             }
//         );
//     }
//         , 1000)

// }
// function wsleep(time) {
//     return new Promise(resolve => setTimeout(() => resolve(), time))
// }