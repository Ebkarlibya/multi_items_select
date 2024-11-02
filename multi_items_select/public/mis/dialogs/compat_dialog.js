// import { DOCTYPES } from "../utils/mis_enums"

export default (item_code) => {
    const settings = MISApp.settings

    let d = new frappe.ui.Dialog(
        {
            title: __("Compatibility Details"),
            fields: [
                { fieldtype: "Section Break", },
                // {
                //     fieldname: "item_code",
                //     fieldtype: "Link",
                //     label: "Item Code",
                //     options: "Item",
                //     read_only: 1,
                // },
                // { fieldtype: "Column Break" },
                // {
                //     fieldname: "item_name",
                //     fieldtype: "Data",
                //     label: "Item Name",
                //     read_only: 1,
                // },
                { fieldtype: "Section Break" },
                {
                    fieldname: "compat_details_table",
                    fieldtype: "Table",
                    data: [],
                    label: "Compatibility Info",
                    options: "Tors Part Compatibility Table",
                    // get_data: () => {
                    //     console.log();
                    //     return [
                    //         {
                    //             make: "Toyota"
                    //         }
                    //     ]
                    // },
                    fields: [
                        {
                            fieldname: "make",
                            fieldtype: "Link",
                            options: "Tors Part Make",
                            in_list_view: 1,
                            read_only: 1
                        },
                        {
                            fieldname: "model",
                            fieldtype: "Link",
                            options: "Tors Part Model",
                            in_list_view: 1,
                            read_only: 1
                        },
                        {
                            fieldname: "year",
                            fieldtype: "Link",
                            options: "Tors Part Year",
                            in_list_view: 1,
                            read_only: 1
                        },
                        {
                            fieldname: "notes",
                            fieldtype: "Data",
                            in_list_view: 1,
                            read_only: 1
                        },
                    ]
                }
            ],
            primary_action_label: __("Done"),
            primary_action: async function (values) {
                d.hide();
            }
        },
    );

    frappe.call(
        {
            method: "multi_items_select.api.get_item_compat_details",
            args: { item_code },
            callback: function(r) {
                console.log(r.message);
                d.fields_dict['compat_details_table'].grid.df.data = r.message
                d.fields_dict['compat_details_table'].grid.refresh()
            }
        }
    )
    
    d.show();
    d.set_df_property("compat_details_table", "cannot_add_rows", 1)
    d.set_df_property("compat_details_table", "cannot_delete_rows", 1)

    d.set_value("item_code", item_code);
    // d.set_value("item_name", item_name);
    d.set_value("compat_details_table", "asd");

    if ($(document).width() > (settings.wide_dialog_enable_on_screen_size ? settings.wide_dialog_enable_on_screen_size : 1500)) {
        d.$wrapper.find('.modal-content').css({
            'width': '200%',
            'margin': '0 auto',
            'left': '50%',
            'transform': 'translateX(-50%)'
        });
    }
}