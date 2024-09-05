import DOCTYPES from "./utils/mis_enums.js"
import { getSettings, getCanBypass, misSetSelectedItem, setupRealtimeSettingUpdate, setupDialogToggle, highlightField } from "./utils/helpers.js";
import misDialog from "./dialogs/mis_dialog.js";
import addItemDialog from "./dialogs/add_item_dialog.js";
import addPackedItemDialog from "./dialogs/add_packed_item_dialog.js";
import scannerDialog from "./dialogs/scanner_dialog.js";

frappe.provide("MISApp")
// console.log(show);

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
                // register table custom button
                const cbtn = frm.fields_dict["items"].grid.add_custom_button(__("MIS Insert"), function () {
                    if (!frm.doc.customer) {
                        frappe.show_alert(__("(MIS): Please select customer first"));
                        return
                    }
                    misDialog(frm)
                });
                setupScannerButton(frm)
                if (localStorage.getItem("mis_reopen")) {
                    misDialog(frm)
                    highlightField(frm, "items")
                    localStorage.removeItem("mis_reopen")
                }

                cbtn.addClass("btn-primary");
                // highlightField(frm, "items")
                // setTimeout(() => MISApp.misDialog(settings, frm), 1000)
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
    console.log(scannerBtn);
    
    // let actions = dialog.$wrapper.find(".modal-actions")
    
    scannerBtn.html(`
            <i class="qrcode-icon-custom-btn fa fa-qrcode" style="font-size: 24px" ></i>
        `
    )

    // let dialogCollapse = actions.find(".dialog-collapse-btn")
    // dialogCollapse.click(() => {
        
    //     let icon = dialogCollapse.find(".dialog-collapse-btn-icon")
    //     if(!MISApp.misDialogCollapsed) {
    //         dialog.$wrapper.find(".modal-body").css("display", "none")   
    //         icon.removeClass("fa-arrow-up")
    //         icon.addClass("fa-arrow-down")      
    //     } else {
    //         dialog.$wrapper.find(".modal-body").css("display", "")
    //         icon.removeClass("fa-arrow-down")
    //         icon.addClass("fa-arrow-up")  
    //     }
    //     MISApp.misDialogCollapsed = !MISApp.misDialogCollapsed
    //     console.log(MISApp.misDialogCollapsed, dialogCollapse);
    // })
    
}

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