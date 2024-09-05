// import { getCanBypass } from "../utils/helpers";

export default async (searchDialog) => {
    // let can_bypass = await getCanBypass()

    let areaID = `qr-code-full-region-${Math.round(Math.random() * 1000)}`
    let scanner = undefined
    let d = new frappe.ui.Dialog({
        title: __("(MIS): Scan Barcode / QRCode"),
        type: "large",
        fields: [{
            fieldname: "qr-code-barcode",
            fieldtype: "HTML",
            options: `
                        <div id="${areaID}">Loading....</div>
                        <style>
                            .modal-content {
                                width: fit-content
                            }
                        </style>
                    `
        },],
        primary_action_label: __("Stop Scanning"),
        primary_action: async function () {
            await scanner.clear()
            scanner = undefined
            d.hide();
        },
    });

    d.show();

    if ($(document).width() > (MISApp.settings.wide_dialog_enable_on_screen_size ? MISApp.settings.wide_dialog_enable_on_screen_size : 1500)) {
        d.$wrapper.find('.modal-content').css({
            'width': '200%',
            'margin': '0 auto',     
            'left': '49%',
            'transform': 'translateX(-51%)'
        });
    }
    
    var config = {
        fps: 60,

        qrbox: {
            width: 500,
            height: 300
        },
        supportedScanTypes: [Html5QrcodeScanType.SCAN_TYPE_CAMERA]
    };

    setTimeout(() => {
        scanner = new Html5QrcodeScanner(areaID, config, false);
        scanner.render(async (barcode) => {
            console.log('success', barcode);
            searchDialog.set_value("search_term", barcode)
            searchDialog.get_field("search_term").wrapper.querySelector("input").dispatchEvent(new Event('input'))
            await scanner.clear()
            scanner = undefined
            d.hide();
            frappe.utils.play_sound("submit")
            // beep.volume = 1
            // beep.play()
        }
            , (d1, d2) => {// console.log('error', d1, d2);
            }
        );
    }
        , 1000)

}       
