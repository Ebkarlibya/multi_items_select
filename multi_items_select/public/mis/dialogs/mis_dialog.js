import { itemsResultCountInfo } from "../utils/helpers";
import { DOCTYPES } from "../utils/mis_enums"

export default (frm, openScanner = false) => {
    const settings = MISApp.settings

    if (!frm.doc.customer && frm.doctype !== DOCTYPES.STOCK_ENTRY) {
        frappe.show_alert(__("(MIS): Please select customer first"));
        return
    }

    var d = new frappe.ui.Dialog({
        title: __(settings.mis_dialog_title),
        type: "extra-large",
        size: "extra-large",
        fields: [
            {
                fieldtype: "Data",
                fieldname: "search_term",
                label: __("Search Items"),
                placeholder: __("Search by Item Code, Name or Barcode")
            },
            {
                label: __("Part Compatibility"),
                fieldname: "part_compat_section",
                fieldtype: "Section Break",
                collapsible: 0
            },
            {
                label: __("Make"),
                fieldname: "compat_make",
                fieldtype: "Link",
                options: "Tors Part Make",
                change: () => {
                    d.set_value("compat_model", "")
                    triggerSearchInput(cur_dialog)
                }
            },
            { fieldtype: "Column Break" },
            {
                label: __("Model"),
                fieldname: "compat_model",
                fieldtype: "Link",
                options: "Tors Part Model",
                change: triggerSearchInput,
                get_query: function (frm, cdt, cdn) {
                    return {
                        filters: { "parent_part_make": d.get_value("compat_make") }
                    }
                }
            },
            { fieldtype: "Column Break" },
            {
                label: __("Year"),
                fieldname: "compat_year",
                fieldtype: "Link",
                options: "Tors Part Year",
                change: triggerSearchInput
            },
            { fieldtype: "Column Break" },
            {
                label: __("Notes"),
                fieldname: "compat_notes",
                fieldtype: "Data",
                change: () => {
                    console.log('this run 2?');
                    

                    triggerSearchInput(d)
                }
            },
            { fieldtype: "Column Break" },
            {
                fieldname: "clear_btn_html",
                fieldtype: "HTML",
                options: `
                <button class="btn btn-arrow dialog-collapse-btn"
                    style="margin-top: 21px; cursor: pointer"
                    onclick="cur_dialog.set_value('compat_make', ''); cur_dialog.set_value('compat_model', ''); cur_dialog.set_value('compat_year', ''); cur_dialog.set_value('compat_notes', '')" >
                    <i class="fa fa-close" aria-hidden="true"></i>
                </button>
                `,
                change: triggerSearchInput
            },
            {
                label: __("Extra Filters"),
                fieldname: "extra_filters",
                fieldtype: "Section Break",
                collapsible: settings.extra_filters_section_collapsed
            },
            {
                label: __(settings.item_group_label ? settings.item_group_label : "Item Group"),
                fieldname: "item_group",
                fieldtype: "Link",
                options: "Item Group",
                change: triggerSearchInput
            },
            { fieldtype: "Column Break" },
            {
                label: __(settings.brand_label ? settings.brand_label : "Brand"),
                fieldname: "brand",
                fieldtype: "Link",
                options: "Brand",
                change: triggerSearchInput
            },
            { fieldtype: "Column Break" },
            {
                label: __(settings.warehouse_label ? settings.warehouse_label : "Warehouse"),
                fieldname: "warehouse",
                fieldtype: "Link",
                options: "Warehouse",
                change: triggerSearchInput
            },
            { fieldtype: "Column Break" },
            {
                label: __(settings.item_option_label ? settings.item_option_label : "Item Option"),
                fieldname: "item_option",
                fieldtype: "Link",
                options: "Item Option",
                change: triggerSearchInput
            },
            { fieldtype: "Column Break" },
            {
                label: __(settings.item_sub_category_label ? settings.item_sub_category_label : "Item Sub-Category"),
                fieldname: "item_sub_category",
                fieldtype: "Link",
                options: "Item Sub-Category",
                change: triggerSearchInput
            },
            ...(
                settings.enable_tag_filter ? [
                    { fieldtype: "Column Break" },
                    {
                        label: __(settings.tag_label ? settings.tag_label : "Tag"),
                        fieldname: "tag",
                        fieldtype: "Link",
                        options: "Multi Select Tag",
                        change: triggerSearchInput
                    },
                ] : []
            ),
            { fieldtype: "Section Break" },
            {
                label: __("Extra Config"),
                fieldname: "extra_config",
                fieldtype: "Section Break",
                collapsible: settings.extra_config_section_collapsed
            },
            { fieldtype: "Column Break" },
            {
                fieldname: "include_non_stock",
                fieldtype: "Check",
                label: __("Include Non Maintain Stock"),
                default: settings.include_non_maintain_stock,
                change: function () {
                    let searchTerm = this.layout.get_field("search_term")
                    searchTerm.input.dispatchEvent(new Event('input'));
                }
            },
            { fieldtype: "Column Break" },
            {
                fieldname: "exclude_out_of_stock_items",
                fieldtype: "Check",
                label: __("Exclude Out of Stock Items"),
                default: settings.exclude_out_of_stock_items,
                change: function () {
                    let searchTerm = this.layout.get_field("search_term")
                    searchTerm.input.dispatchEvent(new Event('input'));
                }
            },
            {
                fieldname: "only_mis_packed_items",
                fieldtype: "Check",
                label: __("Only (MIS) Packed Items"),
                default: settings.only_mis_packed_items,
                change: function () {
                    let searchTerm = this.layout.get_field("search_term")
                    searchTerm.input.dispatchEvent(new Event('input'));
                }
            },
            { fieldtype: "Section Break" },
            {
                fieldname: "query_loading",
                fieldtype: "HTML",
                label: __("Query Loading"),
                hidden: 1,
                options: `
                    <div class="etms-multi__query_loading">
                        <div class="spinner-border" role="status">
                            <span class="sr-only">Loading...</span>
                        </div><br>
                        <p>${frappe._('No Items Found...')}</p>
                    <div>
                    <style>
                        .etms-multi__query_loading {
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            align-items: center;

                        }
                    </style>
                `
            },
            {
                fieldtype: "HTML",
                fieldname: "no_data",
                options: `
                    <div class="etms-multi__no_data">
                        <p>${frappe._('No Items Found...')}</p>
                    </div>
                    <style>
                        .etms-multi__no_data {
                            display: flex;
                            justify-content: center;

                        }
                    </style>
                `,
                hidden: 0
            },
            {
                fieldtype: "HTML",
                fieldname: "search_results",
                hidden: 0
            },
        ],
        primary_action_label: __("Close"),
        primary_action: function () {
            d.hide();
        },
    });

    d.show();

    if (openScanner) {
        MISApp.scannerDialog(d);
    }

    let timeout = null;

    d.get_field("search_term").input.oninput = function () {
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            d.set_df_property("search_results", "hidden", true);
            d.set_df_property("no_data", "hidden", true);
            d.set_df_property("query_loading", "hidden", false);
            setTimeout(() => {
                frappe.call(
                    {
                        method: "multi_items_select.api.get_multiple_items",
                        args: {
                            // source_warehouse: frm.doc.set_warehouse,
                            search_term: d.get_value("search_term"),
                            compat_make: d.get_value("compat_make"),
                            compat_model: d.get_value("compat_model"),
                            compat_year: d.get_value("compat_year"),
                            compat_notes: d.get_value("compat_notes"),
                            include_non_stock: d.get_value("include_non_stock"),
                            exclude_out_of_stock_items: d.get_value("exclude_out_of_stock_items"),
                            only_mis_packed_items: d.get_value("only_mis_packed_items"),
                            item_group: d.get_value("item_group"),
                            brand: d.get_value("brand"),
                            warehouse: d.get_value("warehouse"),
                            item_option: d.get_value("item_option"),
                            item_sub_category: d.get_value("item_sub_category"),
                            tag: d.get_value("tag")
                        },
                        freeze: false,
                        callback: function (r) {
                            if (r.message) {
                                let data_rows = "";

                                if (r.message.length > 0) {
                                    d.set_df_property("search_results", "hidden", false);
                                    d.set_df_property("query_loading", "hidden", true);
                                    d.set_df_property("no_data", "hidden", true);
                                } else {
                                    d.set_df_property("search_results", "hidden", true);
                                    d.set_df_property("query_loading", "hidden", true);
                                    d.set_df_property("no_data", "hidden", false);
                                }

                                MISApp.misLastSearchData = r.message

                                for (let i = 0; i < r.message.length; i++) {
                                    let data = r.message[i];
                                    data.warehouse = data.is_stock_item ? data.warehouse ? data.warehouse : "-" : "*Non Stock*"
                                    data.actual_qty = data.is_stock_item ? data.actual_qty : "-"
                                    data.reserved_qty = data.is_stock_item ? data.reserved_qty : "-"
                                    data.ordered_qty = data.is_stock_item ? data.ordered_qty : "-"
                                    data.brand = data.brand ? data.brand : "-"
                                    data.tors_oem_code = data.tors_oem_code ? data.tors_oem_code : "-"
                                    data.tors_manufacturer_code = data.tors_manufacturer_code ? data.tors_manufacturer_code : "-"
                                    data.tors_original_item_code = data.tors_original_item_code ? data.tors_original_item_code : "-"

                                    data.stock_uom = data.stock_uom ? data.stock_uom : "-"


                                    data_rows += repl(
                                        `
                                        <tr 
                                        

                                            class="etms-add-multi__tb_tr"
                                            onclick="MISApp.addItemDialog(\`%(item_code)s\`, \`%(warehouse)s\`)">
                                                    ${settings.show_item_image ? `<td style="vertical-align: middle; padding: 2px; width: 15%">
                                                        <a id="${data.item_code}" class="venobox" href="${data.image ? data.image : '/assets/multi_items_select/img/image-placeholder.jpg'}" data-gall="myGallery" onclick="event.stopPropagation(); " style="cursor: zoom-in">
                                                            <img class="mis-img img-fluid img-thumbnail round" src="${data.image ? data.image : '/assets/multi_items_select/img/image-placeholder.jpg'}" />
                                                        </a>
                                                    </td>`: ''}
                                                    <td>
                                                        <div class="etms-add-multi__row" ${data.mis_has_packed_item ? 'data-toggle="tooltip" title="Packed Item"' : ''}>
                                                            <div style="display: flex; padding: 2px 2px 2px 2px; justify-content: space-between">
                                                                <div>
                                                                    <span>${data.item_code}</span>
                                                                    ${data.mis_has_packed_item ? `<svg style="padding: 3px; color: brown;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-seam" viewBox="0 0 16 16">
                                                                    <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2zm3.564 1.426L5.596 5 8 5.961 14.154 3.5zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464z"/>
                                                                    </svg>`: ""}
                                                                </div>
                                                                ${data.tors_has_part_compatibility ? `
                                                                    <div style="border: 1px solid gray; border-radius: 6px;" 
                                                                        onclick="event.stopPropagation(); MISApp.compatDialog(\`%(item_code)s\`)">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 72 72"><circle cx="36" cy="36" r="21.298" fill="#fff"/><path fill="#3f3f3f" d="M36 8.071C20.575 8.071 8.071 20.575 8.071 36S20.575 63.929 36 63.929S63.929 51.425 63.929 36S51.425 8.071 36 8.071m0 48.845c-11.551 0-20.916-9.365-20.916-20.916S24.45 15.084 36 15.084S56.916 24.45 56.916 36S47.55 56.916 36 56.916"/><path fill="#3f3f3f" d="M36 29.244a6.756 6.756 0 1 0 0 13.512a6.756 6.756 0 0 0 0-13.512M36 39a3 3 0 1 1 0-6a3 3 0 0 1 0 6"/><g fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2"><circle cx="36" cy="36" r="27.929"/><circle cx="36" cy="36" r="21.298"/><path stroke-linecap="round" d="m21.032 50.968l10.191-10.191m10.255 15.669l-3.729-13.92m18.697-1.048l-13.92-3.729m8.442-16.717L40.777 31.223M30.521 15.554l3.731 13.921m-18.698 1.046l13.919 3.73"/><circle cx="36" cy="36" r="6.756"/><circle cx="36" cy="36" r="3"/></g></svg>
                                                                    </div>
                                                                `:''}
                                                            </div> 
                                                            <p class="etms-multi__subtitle1">${data.item_name}</p>
                                                            <span class="etms-multi__subtitle1">${__("Brand")}: &nbsp; </span><span >${data.brand}</span><br>
                                                            <span class="etms-multi__subtitle1">${__("OEM Code")}: &nbsp; </span><span >${data.tors_oem_code}</span><br>
                                                            <span class="etms-multi__subtitle1">${__("Manufacturer Code")}: &nbsp; </span><span >${data.tors_manufacturer_code}</span><br>
                                                            <span class="etms-multi__subtitle1">${__("Original Item Code")}: &nbsp; </span><span >${data.tors_original_item_code}</span><br>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="etms-add-multi__row">
                                                            ${data.is_stock_item ? ` 
                                                                    <span class="etms-multi__subtitle1">${__("Rate")}: &nbsp; </span><span >${format_currency(data.price_list_rate, data.currency)} (${data.price_list})</span><br>
                                                                    <hr style="margin-top: 3px; margin-bottom: 3px">  
                                                                    <span class="etms-multi__subtitle1">${__("Warehouse")}: &nbsp; </span><span >${data.warehouse}</span><br>
                                                                    <span class="etms-multi__subtitle1">${__("Actual Qty")}: &nbsp; </span><span >${data.actual_qty}</span><br>
                                                                    <span class="etms-multi__subtitle1">${__("Reserved Qty")}: &nbsp; </span><span >${data.reserved_qty}</span><br>
                                                                    <span class="etms-multi__subtitle1">${__("Ordered")}: &nbsp; </span><span>${data.ordered_qty}</span><br>
                                                                    <span class="etms-multi__subtitle1">${__("Sellable Qty")}: &nbsp; </span><span >${data.actual_qty - data.reserved_qty}</span><br>
                                                                    <hr style="margin: 3px">
                                                                ` : `
                                                                    <p style="white-space: nowrap; color: brown;">${data.warehouse}</pبسيبسيبسيب
                                                                `
                                        }
                                                        </div>
                                                    </td>

                                                </tr>`,
                                        {
                                            item_code: data.item_code,
                                            warehouse: data.warehouse
                                        }
                                    );
                                }
                                let html = `
                                        <p class="etms-multi__subtitle1">${itemsResultCountInfo(r.message)}</p>
                                        <table class="table table-striped" style="margin: 0px;">
                                            <thead>
                                                <tr class="etms-add-multi__th_tr">
                                                    ${settings.show_item_image ? `<th scope="col">Image</th>` : ''}
                                                    <th scope="col">Item</th>
                                                    <th scope="col">Extra Details</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                ${data_rows}
                                            </tbody>
                                            </table>
                                            <style>
                                                .modal-content {
                                                }
                                                .etms-add-multi__row {
                                                    cursor: pointer;
                                                }
                                                .etms-multi__subtitle1 {
                                                    font-size: 11px;
                                                    color: gray;
                                                }
                                                .etms-add-multi__th_tr {
                                                    white-space: nowrap;
                                                }
                                                .etms-add-etms-add-multi__tb_tr td {
                                                    padding-top: 3px;
                                                    padding-bottom: 0px;
                                               
                                                }
                                                input[data-fieldname="search_term"] {
                                                    height: 50px
                                                }
                                                .qrcode-icon {
                                                    position: absolute;
                                                    top: 31px;
                                                    right: 10px;
                                                    font-size: 30px;
                                                    border: 2px solid black;
                                                    border-radius: 4px;
                                                    padding-top: 3px;
                                                    padding-right: 5px;
                                                    padding-bottom: 2px;
                                                    padding-left: 5px;
                                                }
                                            </style>
                                        `;

                                d.set_df_property("search_results", "options", html);
                                var vb = new VenoBox(
                                    {
                                        infinigall: false,
                                        navigation: false,
                                        numeration: false,
                                        navTouch: false,
                                        spinner: "flow"
                                    }
                                );
                                console.log(vb);

                            }
                        }
                    }
                )
            }, 100);
        }, 400);
    }
    let searchTerm = d.get_field("search_term")
    // let searchTermControlInput = searchTerm.wrapper.querySelector(".control-input")
    // let searchTermInput = searchTermControlInput.querySelector(`input[data-fieldname="search_term"]`)

    searchTerm.wrapper.insertAdjacentHTML("beforeEnd", `
        <div onclick="MISApp.scannerDialog(cur_dialog)" style="cursor: pointer"><i class="qrcode-icon fa fa-qrcode"></i></div`
    )

    triggerSearchInput(d)
    setupDialogCollapse(d)


    // if ($(document).width() > (settings.wide_dialog_enable_on_screen_size ? settings.wide_dialog_enable_on_screen_size : 1500)) {
    //     d.$wrapper.find('.modal-content').css({
    //         'width': '200%',
    //         'margin': '0 auto',
    //         'left': '50%',
    //         'transform': 'translateX(-50%)'
    //     });
    // }


}

function triggerSearchInput(dialog) {
    let searchTerm = dialog ? dialog.get_field("search_term") : cur_dialog.get_field("search_term")
    searchTerm.input.dispatchEvent(new Event('input'));
}

function setupDialogCollapse(dialog) {
    let actions = dialog.$wrapper.find(".modal-actions")
    let dialogCollapse = actions.find(".dialog-collapse-btn")
    let icon = dialogCollapse.find(".dialog-collapse-btn-icon")

    MISApp.misToggleDialogCollapse = function () {
        dialogCollapse = actions.find(".dialog-collapse-btn")
        icon = dialogCollapse.find(".dialog-collapse-btn-icon")

        if (!MISApp.misDialogCollapsed) {
            dialog.$wrapper.find(".modal-body").css("display", "none")
            icon.removeClass("fa-arrow-up")
            icon.addClass("fa-arrow-down")
        } else {
            dialog.$wrapper.find(".modal-body").css("display", "")
            icon.removeClass("fa-arrow-down")
            icon.addClass("fa-arrow-up")
        }
        MISApp.misDialogCollapsed = !MISApp.misDialogCollapsed
        console.log(MISApp.misDialogCollapsed, dialogCollapse);
    }

    actions.prepend(`
        <button class="btn btn-arrow dialog-collapse-btn" onclick="MISApp.misToggleDialogCollapse()" 
            data-toggle="tooltip" data-placement="bottom" title="(Shift+${MISApp.settings.dialog_open_and_collapse_keyboard_shortcut_key})"
            data-delay='50'
            >
            <i class="fa fa-arrow-up dialog-collapse-btn-icon" aria-hidden="true"></i>
        </button>`
    )
}