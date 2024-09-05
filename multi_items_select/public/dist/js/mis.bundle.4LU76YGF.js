(() => {
  // ../multi_items_select/multi_items_select/public/mis/utils/mis_enums.js
  var mis_enums_default = DOCTYPES = {
    "PURCHASE_INVOICE": "Purchase Invoice",
    "PURCHASE_ORDER": "Purchase Order",
    "SALES_INVOICE": "Sales Invoice",
    "SALES_ORDER": "Sales Order",
    "STOCK_ENTRY": "Stock Entry"
  };

  // ../multi_items_select/multi_items_select/public/mis/utils/helpers.js
  var misSetSelectedItem = async (item_code) => {
    window.MISApp.misSelectedItem = item;
  };
  var getSettings = async () => {
    let mis_settings = await frappe.call({
      method: "multi_items_select.api.get_settings"
    });
    return mis_settings.message;
  };
  var getCanBypass = async () => {
    let can_bypass = await frappe.call({
      method: "multi_items_select.api.get_can_bypass"
    });
    return can_bypass.message;
  };
  var misSleep = (time) => {
    return new Promise((resolve) => setTimeout(() => resolve(), time));
  };
  var highlightField = (frm2, fieldname) => {
    let field = frm2.get_field(fieldname);
    if (!field)
      return;
    let $el = field.$wrapper;
    if (field.tab && !field.tab.is_active()) {
      field.tab.set_active();
    }
    if (field.section.is_collapsed()) {
      field.section.collapse(false);
    }
    frappe.utils.scroll_to($el, true, 15);
    return true;
  };
  var setupRealtimeSettingUpdate = (settings2, frm2) => {
    frappe.realtime.on("mis_settings_update", async () => {
      if (cur_dialog && cur_dialog.title === __(settings2.mis_dialog_title)) {
        frappe.show_alert("Settings Update, Refreshing...");
        localStorage.setItem("mis_reopen", true);
        await misSleep(2e3);
        location.reload();
      }
    });
  };
  var setupDialogToggle = (settings2, frm2) => {
    if (!settings2.dialog_open_keyboard_shortcut_key)
      return;
    $(document).keypress(settings2.dialog_open_keyboard_shortcut_key, async function(e) {
      if (e.shiftKey && e.target == document.body && !cur_dialog && e.originalEvent.key === settings2.dialog_open_keyboard_shortcut_key) {
        console.log(e);
        if (!cur_dialog) {
          frappe.show_alert("Opening MIS Dialog....");
          highlightField(frm2, "items");
          await misSleep(800);
          MISApp.misDialog(frm2);
        } else {
        }
      }
    });
  };
  var itemsResultCountInfo = (data) => {
    let total = 0;
    let isStock = 0;
    let isNonStock = 0;
    let instock = 0;
    let outofstock = 0;
    for (let item2 in data) {
      total += 1;
      if (item2.is_stock_item) {
        isStock += 1;
      } else {
        isNonStock += 1;
      }
      if (item2.actual_qty > 0) {
        instock += 1;
      } else {
        outofstock += 1;
      }
    }
    return `<b>Total: ${total}</b>, Is Stock: <b>${isStock}</b>, Non Stock: <b>${isNonStock}</b>, In Stock: <b>${instock}</b>, Out of Stock: <b>${outofstock}</b>`;
  };

  // ../multi_items_select/multi_items_select/public/mis/dialogs/mis_dialog.js
  var mis_dialog_default = (frm2, openScanner = false) => {
    const settings2 = MISApp.settings;
    var d = new frappe.ui.Dialog({
      title: __(settings2.mis_dialog_title),
      type: "large",
      fields: [
        {
          fieldtype: "Data",
          fieldname: "search_term",
          label: __("Search Items"),
          placeholder: __("Search by Item Code, Name or Barcode")
        },
        {
          label: __("Extra Filters"),
          fieldname: "extra_filters",
          fieldtype: "Section Break",
          collapsible: settings2.extra_filters_section_collapsed
        },
        {
          label: __(settings2.item_group_label ? settings2.item_group_label : "Item Group"),
          fieldname: "item_group",
          fieldtype: "Link",
          options: "Item Group",
          change: triggerSearchInput
        },
        { fieldtype: "Column Break" },
        {
          label: __(settings2.brand_label ? settings2.brand_label : "Brand"),
          fieldname: "brand",
          fieldtype: "Link",
          options: "Brand",
          change: triggerSearchInput
        },
        { fieldtype: "Column Break" },
        {
          label: __(settings2.warehouse_label ? settings2.warehouse_label : "Warehouse"),
          fieldname: "warehouse",
          fieldtype: "Link",
          options: "Warehouse",
          change: triggerSearchInput
        },
        { fieldtype: "Column Break" },
        {
          label: __(settings2.item_option_label ? settings2.item_option_label : "Item Option"),
          fieldname: "item_option",
          fieldtype: "Link",
          options: "Item Option",
          change: triggerSearchInput
        },
        { fieldtype: "Column Break" },
        {
          label: __(settings2.item_sub_category_label ? settings2.item_sub_category_label : "Item Sub-Category"),
          fieldname: "item_sub_category",
          fieldtype: "Link",
          options: "Item Sub-Category",
          change: triggerSearchInput
        },
        ...settings2.enable_tag_filter ? [
          { fieldtype: "Column Break" },
          {
            label: __(settings2.tag_label ? settings2.tag_label : "Tag"),
            fieldname: "tag",
            fieldtype: "Link",
            options: "Multi Select Tag",
            change: triggerSearchInput
          }
        ] : [],
        { fieldtype: "Section Break" },
        {
          label: __("Extra Config"),
          fieldname: "extra_config",
          fieldtype: "Section Break",
          collapsible: settings2.extra_config_section_collapsed
        },
        { fieldtype: "Column Break" },
        {
          fieldname: "include_non_stock",
          fieldtype: "Check",
          label: __("Include Non Maintain Stock"),
          default: settings2.include_non_maintain_stock,
          change: function() {
            let searchTerm2 = this.layout.get_field("search_term");
            searchTerm2.input.dispatchEvent(new Event("input"));
          }
        },
        { fieldtype: "Column Break" },
        {
          fieldname: "exclude_out_of_stock_items",
          fieldtype: "Check",
          label: __("Exclude Out of Stock Items"),
          default: settings2.exclude_out_of_stock_items,
          change: function() {
            let searchTerm2 = this.layout.get_field("search_term");
            searchTerm2.input.dispatchEvent(new Event("input"));
          }
        },
        {
          fieldname: "only_mis_packed_items",
          fieldtype: "Check",
          label: __("Only (MIS) Packed Items"),
          default: settings2.only_mis_packed_items,
          change: function() {
            let searchTerm2 = this.layout.get_field("search_term");
            searchTerm2.input.dispatchEvent(new Event("input"));
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
                        <p>${frappe._("No Items Found...")}</p>
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
                        <p>${frappe._("No Items Found...")}</p>
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
        }
      ],
      primary_action_label: __("Close"),
      primary_action: function() {
        d.hide();
      }
    });
    d.show();
    if (openScanner) {
      MISApp.scannerDialog(d);
    }
    let timeout = null;
    d.get_field("search_term").input.oninput = function() {
      clearTimeout(timeout);
      timeout = setTimeout(function() {
        d.set_df_property("search_results", "hidden", true);
        d.set_df_property("no_data", "hidden", true);
        d.set_df_property("query_loading", "hidden", false);
        setTimeout(() => {
          frappe.call({
            method: "multi_items_select.api.get_multiple_items",
            args: {
              search_term: d.get_value("search_term"),
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
            callback: function(r) {
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
                MISApp.misLastSearchData = r.message;
                for (let i = 0; i < r.message.length; i++) {
                  let data = r.message[i];
                  data.warehouse = data.is_stock_item ? data.warehouse ? data.warehouse : "-" : "*Non Stock*";
                  data.actual_qty = data.is_stock_item ? data.actual_qty : "-";
                  data.reserved_qty = data.is_stock_item ? data.reserved_qty : "-";
                  data.ordered_qty = data.is_stock_item ? data.ordered_qty : "-";
                  data.brand = data.brand ? data.brand : "-";
                  data.stock_uom = data.stock_uom ? data.stock_uom : "-";
                  data_rows += repl(`<tr 
                                            class="etms-add-multi__tb_tr"
                                            onclick="MISApp.addItemDialog(\`%(item_code)s\`, \`%(warehouse)s\`)">
                                                    ${settings2.show_item_image ? `<td style="vertical-align: middle; padding: 2px; width: 15%">
                                                        <div class="img-hover">
                                                            <img class="mis-img img-fluid img-thumbnail round" src="${data.image ? data.image : "/assets/multi_items_select/img/image-placeholder.jpg"}" />
                                                        </div>
                                                    </td>` : ""}
                                                    <td>
                                                        <div class="etms-add-multi__row" ${data.mis_has_packed_item ? 'data-toggle="tooltip" title="Packed Item"' : ""}>
                                                            <div style="display: flex; padding: 2px 2px 2px 2px;">
                                                                <span>${data.item_code}</span>
                                                                ${data.mis_has_packed_item ? `<svg style="padding: 3px; color: brown;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-seam" viewBox="0 0 16 16">
                                                                <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2zm3.564 1.426L5.596 5 8 5.961 14.154 3.5zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464z"/>
                                                                </svg>` : ""}
                                                            </div> 
                                                            <p class="etms-multi__subtitle1">${data.item_name}</p>
                                                            <span class="etms-multi__subtitle1">${__("Brand")}: &nbsp; </span><span >${data.brand}</span><br>
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
                                                                    <p style="white-space: nowrap; color: brown;">${data.warehouse}</p\u0628\u0633\u064A\u0628\u0633\u064A\u0628\u0633\u064A\u0628
                                                                `}
                                                        </div>
                                                    </td>

                                                </tr>`, {
                    item_code: data.item_code,
                    warehouse: data.warehouse
                  });
                }
                let html = `
                                        <p class="etms-multi__subtitle1">${itemsResultCountInfo(r.message)}</p>
                                        <table class="table table-striped" style="margin: 0px;">
                                            <thead>
                                                <tr class="etms-add-multi__th_tr">
                                                    ${settings2.show_item_image ? `<th scope="col">Image</th>` : ""}
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
                                                .img-hover img {
                                                    -webkit-transition: all .3s ease; /* Safari and Chrome */
                                                    -moz-transition: all .3s ease; /* Firefox */
                                                    -o-transition: all .3s ease; /* IE 9 */
                                                    -ms-transition: all .3s ease; /* Opera */
                                                    transition: all .3s ease;
                                                    position:relative;
                                                }
                                                .img-hover img:hover {
                                                    cursor: zoom-in;
                                                    z-index: 20;
                                                    -webkit-backface-visibility: hidden;
                                                    backface-visibility: hidden;
                                                    -webkit-transform:translateZ(0) scale(2.20); /* Safari and Chrome */
                                                    -moz-transform:scale(2.20); /* Firefox */
                                                    -ms-transform:scale(2.20); /* IE 9 */
                                                    -o-transform:translatZ(0) scale(2.20); /* Opera */
                                                    transform:translatZ(0) scale(2.20);
                                                }
                                                  
                                                .img-hover:hover:after {
                                                    content:"";
                                                    position:absolute;
                                                    top:0;
                                                    left:0;
                                                    z-index:2;
                                                    width:30px;
                                                    height:30px;
                                                    border:1px solid #000;
                                                }
                                                  
                                                .grayscale {
                                                  -webkit-filter: brightness(1.10) grayscale(100%) contrast(90%);
                                                  -moz-filter: brightness(1.10) grayscale(100%) contrast(90%);
                                                  filter: brightness(1.10) grayscale(100%); 
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
              }
            }
          });
        }, 100);
      }, 400);
    };
    let searchTerm = d.get_field("search_term");
    searchTerm.wrapper.insertAdjacentHTML("beforeEnd", `
        <div onclick="MISApp.scannerDialog(cur_dialog)" style="cursor: pointer"><i class="qrcode-icon fa fa-qrcode"></i></div`);
    triggerSearchInput(d);
    setupDialogCollapse(d);
    if ($(document).width() > (settings2.wide_dialog_enable_on_screen_size ? settings2.wide_dialog_enable_on_screen_size : 1500)) {
      d.$wrapper.find(".modal-content").css({
        "width": "200%",
        "margin": "0 auto",
        "left": "50%",
        "transform": "translateX(-50%)"
      });
    }
  };
  function triggerSearchInput(dialog) {
    let searchTerm = dialog ? dialog.get_field("search_term") : cur_dialog.get_field("search_term");
    searchTerm.input.dispatchEvent(new Event("input"));
  }
  function setupDialogCollapse(dialog) {
    let actions = dialog.$wrapper.find(".modal-actions");
    actions.prepend(`
        <button class="btn btn-arrow dialog-collapse-btn">
            <i class="fa fa-arrow-up dialog-collapse-btn-icon" aria-hidden="true"></i>
        </button>`);
    let dialogCollapse = actions.find(".dialog-collapse-btn");
    dialogCollapse.click(() => {
      let icon = dialogCollapse.find(".dialog-collapse-btn-icon");
      if (!MISApp.misDialogCollapsed) {
        dialog.$wrapper.find(".modal-body").css("display", "none");
        icon.removeClass("fa-arrow-up");
        icon.addClass("fa-arrow-down");
      } else {
        dialog.$wrapper.find(".modal-body").css("display", "");
        icon.removeClass("fa-arrow-down");
        icon.addClass("fa-arrow-up");
      }
      MISApp.misDialogCollapsed = !MISApp.misDialogCollapsed;
      console.log(MISApp.misDialogCollapsed, dialogCollapse);
    });
  }

  // ../multi_items_select/multi_items_select/public/mis/dialogs/add_item_dialog.js
  var add_item_dialog_default = (item_code, warehouse2) => {
    const selected_item = MISApp.misLastSearchData.find((el) => el.item_code === item_code);
    const { item_name, actual_qty, reserved_qty, mis_has_packed_item } = selected_item;
    console.log("selected_item: ", MISApp.misSelectedItem);
    if (mis_has_packed_item) {
      window.MISApp.addPackedItemDialog(item_code);
      return;
    }
    const sellable_qty = actual_qty - reserved_qty;
    let d = new frappe.ui.Dialog({
      title: __("Select Insert Quantity"),
      fields: [
        {
          fieldname: "qty",
          fieldtype: "Float",
          label: "Qty",
          default: 1,
          reqd: 1
        },
        { fieldtype: "Section Break" },
        {
          fieldname: "item_code",
          fieldtype: "Link",
          label: "Item Code",
          options: "Item",
          read_only: 1
        },
        { fieldtype: "Column Break" },
        {
          fieldname: "item_name",
          fieldtype: "Data",
          label: "Item Name",
          read_only: 1
        },
        { fieldtype: "Section Break" },
        {
          fieldname: "warehouse",
          fieldtype: "Link",
          label: "Warehouse",
          options: "Warehouse",
          read_only: 1
        },
        {
          fieldtype: "Column Break"
        },
        {
          fieldname: "actual_qty",
          fieldtype: "Float",
          label: "Actual Qty",
          default: 0,
          read_only: 1
        },
        {
          fieldtype: "Section Break"
        },
        {
          fieldname: "reserved_qty",
          fieldtype: "Float",
          label: "Reserved Qty",
          default: 0,
          read_only: 1
        },
        {
          fieldtype: "Column Break"
        },
        {
          fieldname: "sellable_qty",
          fieldtype: "Float",
          label: "Sellable Qty",
          default: 0,
          read_only: 1
        }
      ],
      primary_action_label: __("Insert Item"),
      primary_action: async function(values) {
        const itemsGrid = frm.get_field("items").grid;
        let d2 = null;
        if (values.qty > sellable_qty) {
          switch (MISApp.settings.sellable_qty_action) {
            case "Nothing":
              break;
            case "Warn":
              frappe.msgprint(__(`Warning: Item <strong>${item_code}</strong> with Qty (${values.qty}) is higher than the Sellable Qty (${sellable_qty}) however your item got inserted successfully`), "MIS");
              break;
            case "Stop":
              if (MISApp.canBypass) {
                frappe.msgprint(__(`Warning: Item <strong>${item_code}</strong> with Qty (${values.qty}) is higher than the Sellable Qty (${sellable_qty}) however your item got inserted successfully`), "MIS");
                break;
              } else {
                frappe.msgprint(__(`Cannot Insert: Item <strong>${item_code}</strong> with Qty (${values.qty}) is higher than the Sellable Qty (${sellable_qty})`), "MIS");
                return;
              }
          }
        }
        frappe.run_serially([
          () => d2 = itemsGrid.add_new_row(),
          () => frappe.timeout(1),
          async () => {
            let args = {};
            args["item_code"] = item_code;
            args["qty"] = values.qty;
            args["warehouse"] = values.warehouse;
            let model = frappe.model.set_value(d2.doctype, d2.name, args);
            setTimeout(() => {
              d2.warehouse = warehouse2;
              frm.trigger("warehouse", d2.doctype, d2.name);
            }, 1e3);
            return model;
          }
        ]);
        frappe.show_alert(__("(MIS): Item Added!"));
        qd.hide();
      }
    });
    d.show();
    d.set_value("item_code", item_code);
    d.set_value("item_name", item_name);
    d.set_value("warehouse", warehouse2);
    d.set_value("actual_qty", actual_qty);
    d.set_value("reserved_qty", reserved_qty);
    d.set_value("sellable_qty", 55);
    if ($(document).width() > (MISApp.settings.wide_dialog_enable_on_screen_size ? MISApp.settings.wide_dialog_enable_on_screen_size : 1500)) {
      d.$wrapper.find(".modal-content").css({
        "width": "200%",
        "margin": "0 auto",
        "left": "49%",
        "transform": "translateX(-51%)"
      });
    }
  };

  // ../multi_items_select/multi_items_select/public/mis/dialogs/add_packed_item_dialog.js
  var add_packed_item_dialog_default = async (packed_item_code) => {
    let can_bypass = await getCanBypass();
    let qd2 = new frappe.ui.Dialog({
      title: __("Packed Item Details"),
      fields: [
        {
          fieldname: "packed_item",
          fieldtype: "Link",
          label: "Packed Item",
          default: packed_item_code,
          read_only: 1
        },
        { fieldtype: "Column Break" },
        {
          fieldname: "packed_item_name",
          fieldtype: "Data",
          label: "Packed Item Name",
          default: packed_item_code,
          read_only: 1
        },
        {
          fieldtype: "Section Break"
        },
        {
          fieldname: "qty",
          fieldtype: "Float",
          label: "Qty",
          default: 1,
          reqd: 1
        },
        {
          fieldtype: "Section Break",
          label: "Packed Item Items"
        },
        {
          fieldtype: "HTML",
          fieldname: "packed_items_html",
          hidden: 0,
          options: "<h4>Loading Packed Item Data, Please Wait .... </h4>"
        }
      ],
      primary_action_label: __("Insert Items"),
      primary_action: async function(values) {
        frappe.dom.freeze();
        const itemsGrid = frm.get_field("items").grid;
        for (let i = 0; i < cur_frm.mis_last_packed_items_search_data.length; i++) {
          const row = cur_frm.mis_last_packed_items_search_data[i];
          const sellable_qty = row.actual_qty - row.reserved_qty;
          if (row.actual_qty > sellable_qty) {
            switch (settings.sellable_qty_action) {
              case "Nothing":
                break;
              case "Warn":
                frappe.msgprint(__(`Warning: Item <strong>${row.item_code}</strong> with Qty (${row.actual_qty}) is higher than the Sellable Qty (${sellable_qty}) however your item got inserted successfully`), "MIS");
                break;
              case "Stop":
                if (can_bypass) {
                  frappe.msgprint(__(`Warning: Item <strong>${row.item_code}</strong> with Qty (${row.actual_qty}) is higher than the Sellable Qty (${sellable_qty}) however your item got inserted successfully`), "MIS");
                  break;
                } else {
                  frappe.msgprint(__(`Cannot Insert: Item <strong>${row.item_code}</strong> with Qty (${row.actual_qty}) is higher than the Sellable Qty (${sellable_qty})`), "MIS");
                  return;
                }
            }
          }
          let d = null;
          frappe.run_serially([
            () => d = itemsGrid.add_new_row(),
            () => frappe.timeout(0.2),
            () => {
              let args = {};
              args["item_code"] = row.item_code;
              args["qty"] = row.qty * values.qty;
              args["warehouse"] = values.warehouse;
              let model = frappe.model.set_value(d.doctype, d.name, args);
              setTimeout(() => {
                d.warehouse = warehouse;
                frm.trigger("warehouse", d.doctype, d.name);
              }, 1e3);
              return model;
            }
          ]);
        }
        frappe.dom.unfreeze();
        frappe.show_alert(__("(MIS): Packed Items Added!"));
        qd2.hide();
      }
    });
    qd2.show();
    await wsleep(1e3);
    frappe.call({
      method: "multi_items_select.api.get_packed_items",
      args: { packed_item_code },
      callback: function(r) {
        let data_rows = "";
        cur_frm.mis_last_packed_items_search_data = r.message;
        for (let i = 0; i < r.message.length; i++) {
          let data = r.message[i];
          data.warehouse = data.warehouse ? data.warehouse : "-";
          data.actual_qty = data.actual_qty ? data.actual_qty : "-";
          data.reserved_qty = data.reserved_qty ? data.reserved_qty : "-";
          data.ordered_qty = data.ordered_qty ? data.ordered_qty : "-";
          data.brand = data.brand ? data.brand : "-";
          data.stock_uom = data.stock_uom ? data.stock_uom : "-";
          data_rows += repl(`<tr 
                            class="etms-add-multi__tb_tr">
                                    <td style="vertical-align: middle; padding: 2px">
                                        <div class="img-hover">
                                            <img class="mis-img img-fluid img-thumbnail round" src="${data.image}" />
                                        </div>
                                    </td>
                                    <td>
                                        <div class="etms-add-multi__row">
                                            <p>${data.item_code} <span style="font-weight: bold; color: brown;">(${data.qty})</span></p>
                                            <p class="etms-multi__subtitle1">${data.item_name}</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="etms-add-multi__row">
                                            <p>${data.warehouse}</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="etms-add-multi__row">
                                            <p>${data.actual_qty}</p>
                                        <div>
                                        <p class="etms-multi__subtitle1">${data.stock_uom}</p>
                                    </td>
                                    <td>
                                        <div class="etms-add-multi__row">
                                            <p>${data.reserved_qty}</p>
                                        <div>
                                    </td>
                                    <td>
                                        <div class="etms-add-multi__row">
                                            <p>${data.ordered_qty}</p>
                                        <div>
                                    </td>
                                </tr>`, {
            item_code: data.item_code
          });
        }
        let html = `
                        <table class="table table-striped" style="margin: 0px;">
                            <thead>
                                <tr class="etms-add-multi__th_tr">
                                    <th scope="col">Image</th>
                                    <th scope="col">Item Code</th>
                                    <th scope="col">Warehouse</th>
                                    <th scope="col">Actual Qty</th>
                                    <th scope="col">Reserved Qty</th>
                                    <th scope="col">Ordered Qty</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${data_rows}
                            </tbody>
                            </table>
                            <style>
                                .modal-content {
                                    width: fit-content
                                }
                                /*
                                .etms-add-multi__row {
                                    cursor: pointer;
                                }*/
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
                                .img-hover img {
                                    -webkit-transition: all .3s ease; /* Safari and Chrome */
                                    -moz-transition: all .3s ease; /* Firefox */
                                    -o-transition: all .3s ease; /* IE 9 */
                                    -ms-transition: all .3s ease; /* Opera */
                                    transition: all .3s ease;
                                    position:relative;
                                }
                                .img-hover img:hover {
                                    cursor: zoom-in;
                                    z-index: 20;
                                    -webkit-backface-visibility: hidden;
                                    backface-visibility: hidden;
                                    -webkit-transform:translateZ(0) scale(4.20); /* Safari and Chrome */
                                    -moz-transform:scale(4.20); /* Firefox */
                                    -ms-transform:scale(4.20); /* IE 9 */
                                    -o-transform:translatZ(0) scale(4.20); /* Opera */
                                    transform:translatZ(0) scale(4.20);
                                }
                                  
                                .img-hover:hover:after {
                                    content:"";
                                    position:absolute;
                                    top:0;
                                    left:0;
                                    z-index:2;
                                    width:30px;
                                    height:30px;
                                    border:1px solid #000;
                                }
                                  
                                .grayscale {
                                  -webkit-filter: brightness(1.10) grayscale(100%) contrast(90%);
                                  -moz-filter: brightness(1.10) grayscale(100%) contrast(90%);
                                  filter: brightness(1.10) grayscale(100%); 
                                }
                            </style>
                        `;
        cur_dialog.set_df_property("packed_items_html", "options", html);
      }
    });
  };

  // ../multi_items_select/multi_items_select/public/mis/dialogs/scanner_dialog.js
  var scanner_dialog_default = async (searchDialog) => {
    let areaID = `qr-code-full-region-${Math.round(Math.random() * 1e3)}`;
    let scanner = void 0;
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
      }],
      primary_action_label: __("Stop Scanning"),
      primary_action: async function() {
        await scanner.clear();
        scanner = void 0;
        d.hide();
      }
    });
    d.show();
    if ($(document).width() > (MISApp.settings.wide_dialog_enable_on_screen_size ? MISApp.settings.wide_dialog_enable_on_screen_size : 1500)) {
      d.$wrapper.find(".modal-content").css({
        "width": "200%",
        "margin": "0 auto",
        "left": "49%",
        "transform": "translateX(-51%)"
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
        console.log("success", barcode);
        await scanner.clear();
        scanner = void 0;
        d.hide();
        searchDialog.set_value("search_term", barcode);
        searchDialog.get_field("search_term").wrapper.querySelector("input").dispatchEvent(new Event("input"));
        frappe.utils.play_sound("submit");
      }, (d1, d2) => {
      });
    }, 1e3);
  };

  // ../multi_items_select/multi_items_select/public/mis/mis_main.js
  frappe.provide("MISApp");
  $(document).on("app_ready", function() {
    for (let k in mis_enums_default) {
      const DOC = mis_enums_default[k];
      const METHODS = {
        setup: async function(frm2) {
          let settings2 = await getSettings();
          if (!settings2.enabled)
            return;
          MISApp.settings = settings2;
          MISApp.canBypass = await getCanBypass();
          MISApp.misDialog = mis_dialog_default;
          MISApp.misDialogCollapsed = false;
          MISApp.misLastSearchData = null;
          MISApp.misSetSelectedItem = misSetSelectedItem;
          MISApp.addItemDialog = add_item_dialog_default;
          MISApp.addPackedItemDialog = add_packed_item_dialog_default;
          MISApp.scannerDialog = scanner_dialog_default;
          setupRealtimeSettingUpdate(settings2, frm2);
          setupDialogToggle(settings2, frm2);
        },
        refresh: async function(frm2) {
          let settings2 = await getSettings();
          if (!settings2.enabled)
            return;
          if (frm2.doc.docstatus === 1)
            return;
          const itemsGrid = frm2.get_field("items").grid;
          if (settings2.disable_original_add_multi) {
            if (itemsGrid.grid_buttons.find(".grid-add-multiple-rows")) {
              itemsGrid.grid_buttons.find(".grid-add-multiple-rows").remove();
            }
          }
          const cbtn = frm2.fields_dict["items"].grid.add_custom_button(__("MIS Insert"), function() {
            if (!frm2.doc.customer) {
              frappe.show_alert(__("(MIS): Please select customer first"));
              return;
            }
            mis_dialog_default(frm2);
          });
          if (localStorage.getItem("mis_reopen")) {
            mis_dialog_default(frm2);
            highlightField(frm2, "items");
            localStorage.removeItem("mis_reopen");
          }
          cbtn.addClass("btn-primary");
        }
      };
      if (DOC === mis_enums_default.SALES_INVOICE) {
        METHODS["custom_sales_type"] = function(frm2) {
          console.log(`custom field is on sales invoice`, frm2);
        };
      }
      frappe.ui.form.on(DOC, METHODS);
    }
  });
})();
//# sourceMappingURL=mis.bundle.4LU76YGF.js.map
