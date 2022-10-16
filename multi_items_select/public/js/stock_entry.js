
// frappe.ui.form.on("Stock Entry", {
//     refresh: function(frm) {
//         console.log("refresh Stock Entry");
//     },
//     before_save: async function (frm) {

//         let so_items = [];
// debugger
//         for (let i = 0; i < frm.doc.items.length; i++) {
//             so_items.push(frm.doc.items[i].item_code);
//         }


//         // so items
//         frappe.call({
//             method: "multi_items_select.api.get_items_reserved_qty",
//             args: { item_codes: so_items, source_warehouse: frm.doc.set_warehouse },
//             callback: async function (r) {
//                 for (let i = 0; i < r.message.length; i++) {
//                     // r.message[i].reserved_qty = 45;
//                     if (frm.doc.items[i].item_code == r.message[i].item_code) {
//                         let limit_qty = r.message[i].reserved_qty + frm.doc.items[i].qty;
//                         if (limit_qty > r.message[i].actual_qty) {
                            

//                         }
//                     }
//                 }
//             }
//         });
//     }
// });