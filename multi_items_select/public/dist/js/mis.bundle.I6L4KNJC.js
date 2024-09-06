(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));

  // ../multi_items_select/multi_items_select/node_modules/spotlight.js/dist/spotlight.bundle.js
  var require_spotlight_bundle = __commonJS({
    "../multi_items_select/multi_items_select/node_modules/spotlight.js/dist/spotlight.bundle.js"(exports) {
      (function() {
        "use strict";
        var aa = document.createElement("style");
        aa.innerHTML = "@keyframes pulsate{0%,to{opacity:1}50%{opacity:.2}}#spotlight{position:fixed;top:-1px;bottom:-1px;width:100%;z-index:99999;color:#fff;background-color:#000;opacity:0;overflow:hidden;-webkit-user-select:none;-ms-user-select:none;user-select:none;transition:opacity .2s ease-out;font-family:Arial,sans-serif;font-size:16px;font-weight:400;contain:strict;touch-action:none;pointer-events:none}#spotlight.show{opacity:1;transition:none;pointer-events:auto}#spotlight.white{color:#212529;background-color:#fff}#spotlight.white .spl-next,#spotlight.white .spl-page~*,#spotlight.white .spl-prev,#spotlight.white .spl-spinner{filter:invert(1)}#spotlight.white .spl-progress{background-color:rgba(0,0,0,.35)}#spotlight.white .spl-footer,#spotlight.white .spl-header{background-color:rgba(255,255,255,.65)}#spotlight.white .spl-button{background:#212529;color:#fff}.spl-footer,.spl-header{background-color:rgba(0,0,0,.45)}#spotlight .contain,#spotlight .cover{object-fit:cover;height:100%;width:100%}#spotlight .contain{object-fit:contain}#spotlight .autofit{object-fit:none;width:auto;height:auto;max-height:none;max-width:none;transition:none}.spl-scene,.spl-spinner,.spl-track{width:100%;height:100%;position:absolute}.spl-track{contain:strict}.spl-spinner{background-position:center;background-repeat:no-repeat;background-size:42px;opacity:0}.spl-spinner.spin{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzgiIGhlaWdodD0iMzgiIHZpZXdCb3g9IjAgMCAzOCAzOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBzdHJva2U9IiNmZmYiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMSAxKSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2Utb3BhY2l0eT0iLjY1Ij48Y2lyY2xlIHN0cm9rZS1vcGFjaXR5PSIuMTUiIGN4PSIxOCIgY3k9IjE4IiByPSIxOCIvPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOCI+PGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJyb3RhdGUiIGZyb209IjAgMTggMTgiIHRvPSIzNjAgMTggMTgiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIi8+PC9wYXRoPjwvZz48L2c+PC9zdmc+);transition:opacity .2s linear .25s;opacity:1}.spl-spinner.error{background-image:url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjMyIiB3aWR0aD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTYsMUExNSwxNSwwLDEsMCwzMSwxNiwxNSwxNSwwLDAsMCwxNiwxWm0wLDJhMTMsMTMsMCwwLDEsOC40NSwzLjE0TDYuMTQsMjQuNDVBMTMsMTMsMCwwLDEsMTYsM1ptMCwyNmExMywxMywwLDAsMS04LjQ1LTMuMTRMMjUuODYsNy41NUExMywxMywwLDAsMSwxNiwyOVoiIGlkPSJiYW5fc2lnbl9jcm9zc2VkX2NpcmNsZSIvPjwvc3ZnPg==);background-size:128px;transition:none;opacity:.5}.spl-scene{transition:transform .65s cubic-bezier(.1,1,.1,1);contain:layout size;will-change:transform}.spl-pane>*{position:absolute;width:auto;height:auto;max-width:100%;max-height:100%;left:50%;top:50%;margin:0;padding:0;border:0;transform:translate(-50%,-50%) scale(1);transition:transform .65s cubic-bezier(.3,1,.3,1),opacity .65s ease;contain:layout style;will-change:transform,opacity;visibility:hidden}.spl-header,.spl-pane,.spl-progress{position:absolute;top:0}.spl-pane{width:100%;height:100%;transition:transform .65s cubic-bezier(.3,1,.3,1);contain:layout size;will-change:transform,contents}.spl-header{width:100%;height:50px;text-align:right;transform:translateY(-100px);transition:transform .35s ease;overflow:hidden;will-change:transform}#spotlight.menu .spl-footer,#spotlight.menu .spl-header,.spl-footer:hover,.spl-header:hover{transform:translateY(0)}.spl-header div{display:inline-block;vertical-align:middle;white-space:nowrap;width:50px;height:50px;opacity:.5}.spl-progress{width:100%;height:3px;background-color:rgba(255,255,255,.45);transform:translateX(-100%);transition:transform linear}.spl-footer,.spl-next,.spl-prev{position:absolute;transition:transform .35s ease;will-change:transform}.spl-footer{left:0;right:0;bottom:0;line-height:20px;padding:20px 20px 0;padding-bottom:env(safe-area-inset-bottom,0);text-align:left;font-size:15px;font-weight:400;transform:translateY(100%)}.spl-title{font-size:22px}.spl-button,.spl-description,.spl-title{margin-bottom:20px}.spl-button{display:inline-block;background:#fff;color:#000;border-radius:5px;padding:10px 20px;cursor:pointer}.spl-next,.spl-page~*,.spl-prev{background-position:center;background-repeat:no-repeat}.spl-page{float:left;width:auto;line-height:50px}.spl-page~*{background-size:21px;float:right}.spl-fullscreen{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyLjUiIHZpZXdCb3g9Ii0xIC0xIDI2IDI2IiB3aWR0aD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTggM0g1YTIgMiAwIDAgMC0yIDJ2M20xOCAwVjVhMiAyIDAgMCAwLTItMmgtM20wIDE4aDNhMiAyIDAgMCAwIDItMnYtM00zIDE2djNhMiAyIDAgMCAwIDIgMmgzIi8+PC9zdmc+)}.spl-fullscreen.on{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyLjUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik04IDN2M2EyIDIgMCAwIDEtMiAySDNtMTggMGgtM2EyIDIgMCAwIDEtMi0yVjNtMCAxOHYtM2EyIDIgMCAwIDEgMi0yaDNNMyAxNmgzYTIgMiAwIDAgMSAyIDJ2MyIvPjwvc3ZnPg==)}.spl-autofit{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBoZWlnaHQ9Ijk2cHgiIHZpZXdCb3g9IjAgMCA5NiA5NiIgd2lkdGg9Ijk2cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggdHJhbnNmb3JtPSJyb3RhdGUoOTAgNTAgNTApIiBmaWxsPSIjZmZmIiBkPSJNNzEuMzExLDgwQzY5LjY3LDg0LjY2LDY1LjIzLDg4LDYwLDg4SDIwYy02LjYzLDAtMTItNS4zNy0xMi0xMlYzNmMwLTUuMjMsMy4zNC05LjY3LDgtMTEuMzExVjc2YzAsMi4yMSwxLjc5LDQsNCw0SDcxLjMxMSAgeiIvPjxwYXRoIHRyYW5zZm9ybT0icm90YXRlKDkwIDUwIDUwKSIgZmlsbD0iI2ZmZiIgZD0iTTc2LDhIMzZjLTYuNjMsMC0xMiw1LjM3LTEyLDEydjQwYzAsNi42Myw1LjM3LDEyLDEyLDEyaDQwYzYuNjMsMCwxMi01LjM3LDEyLTEyVjIwQzg4LDEzLjM3LDgyLjYzLDgsNzYsOHogTTgwLDYwICBjMCwyLjIxLTEuNzksNC00LDRIMzZjLTIuMjEsMC00LTEuNzktNC00VjIwYzAtMi4yMSwxLjc5LTQsNC00aDQwYzIuMjEsMCw0LDEuNzksNCw0VjYweiIvPjwvc3ZnPg==)}.spl-zoom-in,.spl-zoom-out{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxMSIgY3k9IjExIiByPSI4Ii8+PGxpbmUgeDE9IjIxIiB4Mj0iMTYuNjUiIHkxPSIyMSIgeTI9IjE2LjY1Ii8+PGxpbmUgeDE9IjgiIHgyPSIxNCIgeTE9IjExIiB5Mj0iMTEiLz48L3N2Zz4=);background-size:22px}.spl-zoom-in{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxMSIgY3k9IjExIiByPSI4Ii8+PGxpbmUgeDE9IjIxIiB4Mj0iMTYuNjUiIHkxPSIyMSIgeTI9IjE2LjY1Ii8+PGxpbmUgeDE9IjExIiB4Mj0iMTEiIHkxPSI4IiB5Mj0iMTQiLz48bGluZSB4MT0iOCIgeDI9IjE0IiB5MT0iMTEiIHkyPSIxMSIvPjwvc3ZnPg==)}.spl-download{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaGVpZ2h0PSIxNDEuNzMycHgiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDE0MS43MzIgMTQxLjczMiIgd2lkdGg9IjE0MS43MzJweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjZmZmIj48cGF0aCBkPSJNMTIwLjY3NCwxMjUuMTM4SDIwLjc5M3YxNi41OTRoOTkuODgxVjEyNS4xMzh6IE0xMTkuMDE5LDU4Ljc3NmMtMi41NjEtMi41NjItNi43MTYtMi41NjItOS4yNzUsMEw3Ny4yMSw5MS4zMTJWNi41NjIgICBDNzcuMjEsMi45MzYsNzQuMjY5LDAsNzAuNjQ4LDBjLTMuNjI0LDAtNi41NiwyLjkzNy02LjU2LDYuNTYzdjg0Ljc1TDMxLjk5Miw1OS4yMThjLTIuNTYyLTIuNTY0LTYuNzE1LTIuNTY0LTkuMjc3LDAgICBjLTIuNTY1LDIuNTYyLTIuNTY1LDYuNzE2LDAsOS4yNzlsNDMuMjk0LDQzLjI5M2MwLjE1LDAuMTU0LDAuMzE0LDAuMjk5LDAuNDgxLDAuNDM4YzAuMDc2LDAuMDYyLDAuMTU1LDAuMTEzLDAuMjM0LDAuMTc2ICAgYzAuMDk0LDAuMDY1LDAuMTg2LDAuMTQyLDAuMjc5LDAuMjA2YzAuMDk3LDAuMDYzLDAuMTkyLDAuMTE0LDAuMjg2LDAuMTc0YzAuMDg4LDAuMDU0LDAuMTc0LDAuMTA1LDAuMjY1LDAuMTUzICAgYzAuMSwwLjA1NiwwLjE5OSwwLjEsMC4yOTgsMC4xNDdjMC4wOTcsMC4wNDUsMC4xOSwwLjA5MSwwLjI4MywwLjEzMmMwLjA5OCwwLjA0LDAuMTk2LDAuMDcyLDAuMjk1LDAuMTA1ICAgYzAuMTA0LDAuMDM4LDAuMjA3LDAuMDc4LDAuMzEyLDAuMTA5YzAuMTAxLDAuMDMsMC4xOTcsMC4wNTIsMC4yOTcsMC4wNzdjMC4xMDgsMC4wMjMsMC4yMTQsMC4wNTgsMC4zMjQsMC4wNzggICBjMC4xMTUsMC4wMjEsMC4yMzEsMC4wMzMsMC4zNDYsMC4wNTRjMC4wOTcsMC4wMTUsMC4xOTIsMC4wMzIsMC4yODksMC4wNDJjMC40MywwLjA0MiwwLjg2NSwwLjA0MiwxLjI5NSwwICAgYzAuMS0wLjAxLDAuMTkxLTAuMDI3LDAuMjg5LTAuMDQyYzAuMTE0LTAuMDIxLDAuMjMzLTAuMDI5LDAuMzQ0LTAuMDU0YzAuMTA5LTAuMDIxLDAuMjE3LTAuMDU1LDAuMzI0LTAuMDc4ICAgYzAuMTAyLTAuMDI1LDAuMTk5LTAuMDQ3LDAuMjk5LTAuMDc3YzAuMTA1LTAuMDMxLDAuMjA3LTAuMDcxLDAuMzEyLTAuMTA5YzAuMTAyLTAuMDMsMC4xOTUtMC4wNjIsMC4yOTUtMC4xMDUgICBjMC4wOTYtMC4wNDEsMC4xOTEtMC4wODcsMC4yODMtMC4xMzJjMC4xLTAuMDQ4LDAuMTk5LTAuMDkyLDAuMjk3LTAuMTQ3YzAuMDkxLTAuMDQ4LDAuMTc3LTAuMTA0LDAuMjY0LTAuMTUzICAgYzAuMDk4LTAuMDYsMC4xOTMtMC4xMSwwLjI4Ny0wLjE3NGMwLjA5Ni0wLjA2NCwwLjE4OS0wLjE0MSwwLjI4MS0wLjIwNmMwLjA3Ni0wLjA2MiwwLjE1Ni0wLjExMywwLjIzMy0wLjE3NiAgIGMwLjI0OS0wLjIwNCwwLjQ3OS0wLjQzNywwLjY5NC0wLjY3YzAuMDc2LTAuMDY3LDAuMTU0LTAuMTMxLDAuMjI5LTAuMjAzbDQzLjI5NC00My4yOTYgICBDMTIxLjU4MSw2NS40OTEsMTIxLjU4MSw2MS4zMzcsMTE5LjAxOSw1OC43NzYiLz48L2c+PC9zdmc+);background-size:20px}.spl-theme{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBoZWlnaHQ9IjI0cHgiIHZlcnNpb249IjEuMiIgdmlld0JveD0iMiAyIDIwIDIwIiB3aWR0aD0iMjRweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjZmZmIj48cGF0aCBkPSJNMTIsNGMtNC40MTgsMC04LDMuNTgyLTgsOHMzLjU4Miw4LDgsOHM4LTMuNTgyLDgtOFMxNi40MTgsNCwxMiw0eiBNMTIsMThjLTMuMzE0LDAtNi0yLjY4Ni02LTZzMi42ODYtNiw2LTZzNiwyLjY4Niw2LDYgUzE1LjMxNCwxOCwxMiwxOHoiLz48cGF0aCBkPSJNMTIsN3YxMGMyLjc1NywwLDUtMi4yNDMsNS01UzE0Ljc1Nyw3LDEyLDd6Ii8+PC9nPjwvc3ZnPg==)}.spl-play{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiB2aWV3Qm94PSItMC41IC0wLjUgMjUgMjUiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIvPjxwb2x5Z29uIGZpbGw9IiNmZmYiIHBvaW50cz0iMTAgOCAxNiAxMiAxMCAxNiAxMCA4Ii8+PC9zdmc+)}.spl-play.on{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiB2aWV3Qm94PSItMC41IC0wLjUgMjUgMjUiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIvPjxsaW5lIHgxPSIxMCIgeDI9IjEwIiB5MT0iMTUiIHkyPSI5Ii8+PGxpbmUgeDE9IjE0IiB4Mj0iMTQiIHkxPSIxNSIgeTI9IjkiLz48L3N2Zz4=);animation:pulsate 1s ease infinite}.spl-close{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiB2aWV3Qm94PSIyIDIgMjAgMjAiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48bGluZSB4MT0iMTgiIHgyPSI2IiB5MT0iNiIgeTI9IjE4Ii8+PGxpbmUgeDE9IjYiIHgyPSIxOCIgeTE9IjYiIHkyPSIxOCIvPjwvc3ZnPg==)}.spl-next,.spl-prev{top:50%;width:50px;height:50px;opacity:.65;background-color:rgba(0,0,0,.45);border-radius:100%;cursor:pointer;margin-top:-25px;transform:translateX(-100px);background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cG9seWxpbmUgcG9pbnRzPSIxNSAxOCA5IDEyIDE1IDYiLz48L3N2Zz4=);background-size:30px}.spl-prev{left:20px}.spl-next{left:auto;right:20px;transform:translateX(100px) scaleX(-1)}#spotlight.menu .spl-prev{transform:translateX(0)}#spotlight.menu .spl-next{transform:translateX(0) scaleX(-1)}@media (hover:hover){.spl-page~div{cursor:pointer;transition:opacity .2s ease}.spl-next:hover,.spl-page~div:hover,.spl-prev:hover{opacity:1}}@media (max-width:500px){.spl-header div{width:44px}.spl-footer .spl-title{font-size:20px}.spl-footer{font-size:14px}.spl-next,.spl-prev{width:35px;height:35px;margin-top:-17.5px;background-size:15px 15px}.spl-spinner{background-size:30px 30px}}.hide-scrollbars{overflow:hidden!important}";
        var ba = document.getElementsByTagName("head")[0];
        ba.firstChild ? ba.insertBefore(aa, ba.firstChild) : ba.appendChild(aa);
        Object.assign || (Object.assign = function(a, b) {
          for (var c = Object.keys(b), e = 0, f; e < c.length; e++)
            f = c[e], a[f] = b[f];
          return a;
        });
        Element.prototype.closest || (Element.prototype.closest = function(a) {
          a = a.substring(1);
          for (var b = this; b && b.nodeType === 1; ) {
            if (b.classList.contains(a))
              return b;
            b = b.parentElement;
          }
          return null;
        });
        function d(a, b, c) {
          a.classList[c ? "add" : "remove"](b);
        }
        function g(a, b, c) {
          c = "" + c;
          a["_s_" + b] !== c && (a.style.setProperty(b, c), a["_s_" + b] = c);
        }
        var ca = 0;
        function da(a, b) {
          b && (g(a, "transition", "none"), b());
          ca || (ca = a.clientTop && 0);
          b && g(a, "transition", "");
        }
        function h(a, b, c, e) {
          k(true, a, b, c, e);
        }
        function k(a, b, c, e, f) {
          b[(a ? "add" : "remove") + "EventListener"](c, e, f || f === false ? f : true);
        }
        function ea(a, b) {
          a.stopPropagation();
          b && a.preventDefault();
        }
        function l(a, b) {
          g(a, "display", b ? "" : "none");
        }
        function fa(a, b) {
          g(a, "visibility", b ? "" : "hidden");
        }
        function m(a, b) {
          g(a, "transition", b ? "" : "none");
        }
        ;
        var n = "theme download play page close autofit zoom-in zoom-out prev next fullscreen".split(" "), ha = { page: 1, close: 1, autofit: 1, "zoom-in": 1, "zoom-out": 1, prev: 1, next: 1, fullscreen: 1 };
        var p = document.createElement("div");
        p.id = "spotlight";
        p.innerHTML = "<div class=spl-spinner></div><div class=spl-track><div class=spl-scene><div class=spl-pane></div></div></div><div class=spl-header><div class=spl-page> </div></div><div class=spl-progress></div><div class=spl-footer><div class=spl-title> </div><div class=spl-description> </div><div class=spl-button> </div></div><div class=spl-prev></div><div class=spl-next></div>";
        var ia = {}, ja = document.createElement("video");
        function ka(a, b, c, e) {
          if (e !== "node") {
            for (var f = Object.keys(c), A = 0, w; A < f.length; A++)
              if (w = f[A], 3 < w.length && w.indexOf("src") === 0) {
                if (e === "video") {
                  var F = ia[w];
                  if (F) {
                    if (0 < F) {
                      var Ga = c[w];
                      break;
                    }
                  } else if (ja.canPlayType("video/" + w.substring(3).replace("-", "").toLowerCase())) {
                    ia[w] = 1;
                    Ga = c[w];
                    break;
                  } else
                    ia[w] = -1;
                } else if (F = parseInt(w.substring(4), 10)) {
                  if (F = Math.abs(b - F), !jb || F < jb) {
                    var jb = F;
                    Ga = c[w];
                  }
                }
              }
          }
          return Ga || c.src || c.href || a.src || a.href;
        }
        ;
        var q = {}, la = navigator.connection, ma = window.devicePixelRatio || 1, r, t, na, oa, u, pa, qa, ra, v, sa, ta, ua, x, y, z, B, C, D, va, E, G, wa, xa, ya, za, Aa, Ba, H, Ca, Da, Ea, Fa, I, Ha, Ia, Ja, Ka, J, K, L, M, N, La = document.createElement("img"), Ma, Na, Oa, Pa, Qa, Ra, Sa, Ta, Ua, Va, Wa, O, Xa, P, Q, R, S, Ya, T, Za;
        h(document, "click", $a);
        function ab() {
          function a(c) {
            return q[c] = (p || document).getElementsByClassName("spl-" + c)[0];
          }
          if (!K) {
            K = document.body;
            Ma = a("scene");
            Na = a("header");
            Oa = a("footer");
            Pa = a("title");
            Qa = a("description");
            Ra = a("button");
            Sa = a("prev");
            Ta = a("next");
            Va = a("page");
            O = a("progress");
            Xa = a("spinner");
            M = [a("pane")];
            U("close", bb);
            K[T = "requestFullscreen"] || K[T = "msRequestFullscreen"] || K[T = "webkitRequestFullscreen"] || K[T = "mozRequestFullscreen"] || (T = "");
            T ? (Za = T.replace("request", "exit").replace("mozRequest", "mozCancel").replace("Request", "Exit"), Ua = U("fullscreen", cb)) : n.pop();
            U("autofit", V);
            U("zoom-in", db);
            U("zoom-out", eb);
            U("theme", fb);
            Wa = U("play", W);
            U("download", gb);
            h(Sa, "click", hb);
            h(Ta, "click", ib);
            var b = a("track");
            h(b, "mousedown", kb);
            h(b, "mousemove", lb);
            h(b, "mouseleave", mb);
            h(b, "mouseup", mb);
            h(b, "touchstart", kb, { passive: false });
            h(b, "touchmove", lb, { passive: true });
            h(b, "touchend", mb);
            h(Ra, "click", function() {
              Fa ? Fa(z, D) : Ea && (location.href = Ea);
            });
          }
        }
        function U(a, b) {
          var c = document.createElement("div");
          c.className = "spl-" + a;
          h(c, "click", b);
          Na.appendChild(c);
          return q[a] = c;
        }
        function $a(a) {
          var b = a.target.closest(".spotlight");
          if (b) {
            ea(a, true);
            a = b.closest(".spotlight-group");
            C = (a || document).getElementsByClassName("spotlight");
            for (var c = 0; c < C.length; c++)
              if (C[c] === b) {
                E = a && a.dataset;
                nb(c + 1);
                break;
              }
          }
        }
        function nb(a) {
          if (B = C.length) {
            K || ab();
            xa && xa(a);
            for (var b = M[0], c = b.parentNode, e = M.length; e < B; e++) {
              var f = b.cloneNode(false);
              g(f, "left", 100 * e + "%");
              c.appendChild(f);
              M[e] = f;
            }
            L || (K.appendChild(p), ob());
            z = a || 1;
            m(Ma);
            pb(true);
            T && l(Ua, 0 < screen.availHeight - window.innerHeight);
            history.pushState({ spl: 1 }, "");
            history.pushState({ spl: 2 }, "");
            m(p, true);
            d(K, "hide-scrollbars", true);
            d(p, "show", true);
            qb(true);
            ob();
            X();
            H && W(true, true);
          }
        }
        function Y(a, b) {
          a = D[a];
          return typeof a !== "undefined" ? (a = "" + a, a !== "false" && (a || b)) : b;
        }
        function rb(a) {
          a ? da(N, rb) : (m(Ma, Ka), g(N, "opacity", Ja ? 0 : 1), sb(Ia && 0.8), J && d(N, J, true));
        }
        function tb(a) {
          L = M[a - 1];
          N = L.firstChild;
          z = a;
          if (N)
            x && V(), Aa && d(N, Aa, true), rb(true), J && d(N, J), Ja && g(N, "opacity", 1), Ia && g(N, "transform", ""), g(N, "visibility", "visible"), Q && (La.src = Q), H && ub(R);
          else {
            var b = P.media, c = Y("spinner", true);
            if (b === "video")
              vb(c, true), N = document.createElement("video"), N.onloadedmetadata = function() {
                N === this && (N.onerror = null, N.width = N.videoWidth, N.height = N.videoHeight, wb(), vb(c), tb(a));
              }, N.poster = D.poster, N.preload = Da ? "auto" : "metadata", N.controls = Y("controls", true), N.autoplay = D.autoplay, N.h = Y("inline"), N.muted = Y("muted"), N.src = P.src, L.appendChild(N);
            else {
              if (b === "node") {
                N = P.src;
                typeof N === "string" && (N = document.querySelector(N));
                N && (N.g || (N.g = N.parentNode), wb(), L.appendChild(N), tb(a));
                return;
              }
              vb(c, true);
              N = document.createElement("img");
              N.onload = function() {
                N === this && (N.onerror = null, vb(c), tb(a), wb());
              };
              N.src = P.src;
              L.appendChild(N);
            }
            N && (c || g(N, "visibility", "visible"), N.onerror = function() {
              N === this && (xb(N), d(Xa, "error", true), vb(c));
            });
          }
        }
        function vb(a, b) {
          a && d(Xa, "spin", b);
        }
        function yb() {
          return document.fullscreen || document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement;
        }
        function zb() {
          ob();
          N && wb();
          if (T) {
            var a = yb();
            d(Ua, "on", a);
            a || l(Ua, 0 < screen.availHeight - window.innerHeight);
          }
        }
        function ob() {
          u = p.clientWidth;
          pa = p.clientHeight;
        }
        function wb() {
          qa = N.clientWidth;
          ra = N.clientHeight;
        }
        function sb(a) {
          g(N, "transform", "translate(-50%, -50%) scale(" + (a || v) + ")");
        }
        function Z(a, b) {
          g(L, "transform", a || b ? "translate(" + a + "px, " + b + "px)" : "");
        }
        function Ab(a, b, c) {
          b ? da(Ma, function() {
            Ab(a, false, c);
          }) : g(Ma, "transform", "translateX(" + (100 * -a + (c || 0)) + "%)");
        }
        function qb(a) {
          k(a, window, "keydown", Bb);
          k(a, window, "wheel", Cb);
          k(a, window, "resize", zb);
          k(a, window, "popstate", Db);
        }
        function Db(a) {
          L && a.state.spl && bb(true);
        }
        function Bb(a) {
          if (L) {
            var b = D["zoom-in"] !== false;
            switch (a.keyCode) {
              case 8:
                b && V();
                break;
              case 27:
                bb();
                break;
              case 32:
                H && W();
                break;
              case 37:
                hb();
                break;
              case 39:
                ib();
                break;
              case 38:
              case 107:
              case 187:
                b && db();
                break;
              case 40:
              case 109:
              case 189:
                b && eb();
            }
          }
        }
        function Cb(a) {
          L && D["zoom-in"] !== false && (a = a.deltaY, 0 > 0.5 * (0 > a ? 1 : a ? -1 : 0) ? eb() : db());
        }
        function W(a, b) {
          (typeof a === "boolean" ? a : !R) === !R && (R = R ? clearTimeout(R) : 1, d(Wa, "on", R), b || ub(R));
        }
        function ub(a) {
          wa && (da(O, function() {
            g(O, "transition-duration", "");
            g(O, "transform", "");
          }), a && (g(O, "transition-duration", Ha + "s"), g(O, "transform", "translateX(0)")));
          a && (R = setTimeout(ib, 1e3 * Ha));
        }
        function X() {
          Ba && (Ya = Date.now() + 2950, S || (d(p, "menu", true), Eb(3e3)));
        }
        function Eb(a) {
          S = setTimeout(function() {
            var b = Date.now();
            b >= Ya ? (d(p, "menu"), S = 0) : Eb(Ya - b);
          }, a);
        }
        function Fb(a) {
          typeof a === "boolean" && (S = a ? S : 0);
          S ? (S = clearTimeout(S), d(p, "menu")) : X();
        }
        function kb(a) {
          ea(a, true);
          sa = true;
          ta = false;
          var b = a.touches;
          b && (b = b[0]) && (a = b);
          ua = qa * v <= u;
          na = a.pageX;
          oa = a.pageY;
          m(L);
        }
        function mb(a) {
          ea(a);
          if (sa) {
            if (ta) {
              if (ua && ta) {
                var b = (a = r < -(u / 7) && (z < B || G)) || r > u / 7 && (1 < z || G);
                if (a || b)
                  Ab(z - 1, true, r / u * 100), a && ib() || b && hb();
                r = 0;
                Z();
              }
              m(L, true);
            } else
              Fb();
            sa = false;
          }
        }
        function lb(a) {
          ea(a);
          if (sa) {
            var b = a.touches;
            b && (b = b[0]) && (a = b);
            b = (qa * v - u) / 2;
            r -= na - (na = a.pageX);
            ua || (r > b ? r = b : r < -b && (r = -b), ra * v > pa && (b = (ra * v - pa) / 2, t -= oa - (oa = a.pageY), t > b ? t = b : t < -b && (t = -b)));
            ta = true;
            Z(r, t);
          } else
            X();
        }
        function cb(a) {
          var b = yb();
          if (typeof a !== "boolean" || a !== !!b)
            if (b)
              document[Za]();
            else
              p[T]();
        }
        function fb(a) {
          typeof a !== "string" && (a = y ? "" : Ca || "white");
          y !== a && (y && d(p, y), a && d(p, a, true), y = a);
        }
        function V(a) {
          typeof a === "boolean" && (x = !a);
          x = v === 1 && !x;
          d(N, "autofit", x);
          g(N, "transform", "");
          v = 1;
          t = r = 0;
          wb();
          m(L);
          Z();
        }
        function db() {
          var a = v / 0.65;
          50 >= a && (x && V(), r /= 0.65, t /= 0.65, Z(r, t), Gb(a));
        }
        function eb() {
          var a = 0.65 * v;
          x && V();
          1 <= a && (a === 1 ? r = t = 0 : (r *= 0.65, t *= 0.65), Z(r, t), Gb(a));
        }
        function Gb(a) {
          v = a || 1;
          sb();
        }
        function gb() {
          var a = K, b = document.createElement("a"), c = N.src;
          b.href = c;
          b.download = c.substring(c.lastIndexOf("/") + 1);
          a.appendChild(b);
          b.click();
          a.removeChild(b);
        }
        function bb(a) {
          setTimeout(function() {
            K.removeChild(p);
            L = N = P = D = E = C = xa = ya = za = Fa = null;
          }, 200);
          d(K, "hide-scrollbars");
          d(p, "show");
          cb(false);
          qb();
          history.go(a === true ? -1 : -2);
          Q && (La.src = "");
          R && W();
          N && xb(N);
          S && (S = clearTimeout(S));
          y && fb();
          I && d(p, I);
          za && za();
        }
        function xb(a) {
          if (a.g)
            a.g.appendChild(a), a.g = null;
          else {
            var b = a.parentNode;
            b && b.removeChild(a);
            a.src = a.onerror = "";
          }
        }
        function hb(a) {
          a && X();
          if (1 < B) {
            if (1 < z)
              return Hb(z - 1);
            if (G)
              return Ab(B, true), Hb(B);
          }
        }
        function ib(a) {
          a && X();
          if (1 < B) {
            if (z < B)
              return Hb(z + 1);
            if (G)
              return Ab(-1, true), Hb(1);
            R && W();
          }
        }
        function Hb(a) {
          if (a !== z) {
            R ? (clearTimeout(R), ub()) : X();
            var b = a > z;
            z = a;
            pb(b);
            return true;
          }
        }
        function Ib(a) {
          var b = C[z - 1], c = b;
          D = {};
          E && Object.assign(D, E);
          Object.assign(D, c.dataset || c);
          va = D.media;
          Fa = D.onclick;
          Ca = D.theme;
          I = D["class"];
          Ba = Y("autohide", true);
          G = Y("infinite");
          wa = Y("progress", true);
          H = Y("autoslide");
          Da = Y("preload", true);
          Ea = D.buttonHref;
          Ha = H && parseFloat(H) || 7;
          y || Ca && fb(Ca);
          I && d(p, I, true);
          I && da(p);
          if (c = D.control) {
            c = typeof c === "string" ? c.split(",") : c;
            for (var e = 0; e < n.length; e++)
              D[n[e]] = false;
            for (e = 0; e < c.length; e++) {
              var f = c[e].trim();
              f === "zoom" ? D["zoom-in"] = D["zoom-out"] = true : D[f] = true;
            }
          }
          c = D.animation;
          Ia = Ja = Ka = !c;
          J = false;
          if (c)
            for (c = typeof c === "string" ? c.split(",") : c, e = 0; e < c.length; e++)
              f = c[e].trim(), f === "scale" ? Ia = true : f === "fade" ? Ja = true : f === "slide" ? Ka = true : f && (J = f);
          Aa = D.fit;
          e = la && la.downlink;
          c = Math.max(pa, u) * ma;
          e && 1200 * e < c && (c = 1200 * e);
          var A;
          P = { media: va, src: ka(b, c, D, va), title: Y("title", b.alt || b.title || (A = b.firstElementChild) && (A.alt || A.title)) };
          Q && (La.src = Q = "");
          Da && a && (b = C[z]) && (a = b.dataset || b, (A = a.media) && A !== "image" || (Q = ka(b, c, a, A)));
          for (b = 0; b < n.length; b++)
            a = n[b], l(q[a], Y(a, ha[a]));
        }
        function pb(a) {
          t = r = 0;
          v = 1;
          if (N)
            if (N.onerror)
              xb(N);
            else {
              var b = N;
              setTimeout(function() {
                b && N !== b && (xb(b), b = null);
              }, 650);
              rb();
              Z();
            }
          Ib(a);
          Ab(z - 1);
          d(Xa, "error");
          tb(z);
          m(L);
          Z();
          a = P.title;
          var c = Y("description"), e = Y("button"), f = a || c || e;
          f && (a && (Pa.firstChild.nodeValue = a), c && (Qa.firstChild.nodeValue = c), e && (Ra.firstChild.nodeValue = e), l(Pa, a), l(Qa, c), l(Ra, e), g(Oa, "transform", Ba === "all" ? "" : "none"));
          Ba || d(p, "menu", true);
          fa(Oa, f);
          fa(Sa, G || 1 < z);
          fa(Ta, G || z < B);
          Va.firstChild.nodeValue = 1 < B ? z + " / " + B : "";
          ya && ya(z, D);
        }
        ;
        window.Spotlight = { init: ab, theme: fb, fullscreen: cb, download: gb, autofit: V, next: ib, prev: hb, goto: Hb, close: bb, zoom: Gb, menu: Fb, show: function(a, b, c) {
          C = a;
          b && (E = b, xa = b.onshow, ya = b.onchange, za = b.onclose, c = c || b.index);
          nb(c);
        }, play: W, addControl: U, removeControl: function(a) {
          var b = q[a];
          b && (Na.removeChild(b), q[a] = null);
        } };
      }).call(exports);
    }
  });

  // ../multi_items_select/multi_items_select/public/mis/mis.bundle.js
  var import_spotlight_bundle = __toESM(require_spotlight_bundle());

  // ../multi_items_select/multi_items_select/public/mis/utils/mis_enums.js
  var DOCTYPES = {
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
    if (!settings2.dialog_open_and_collapse_keyboard_shortcut_key)
      return;
    $(document).keypress(settings2.dialog_open_and_collapse_keyboard_shortcut_key, async function(e) {
      if (e.shiftKey && e.originalEvent.key === settings2.dialog_open_and_collapse_keyboard_shortcut_key) {
        console.log(e);
        if (!cur_dialog) {
          frappe.show_alert("Opening MIS Dialog....");
          highlightField(frm2, "items");
          await misSleep(800);
          MISApp.misDialog(frm2);
        } else {
          MISApp.misToggleDialogCollapse();
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
    if (!frm2.doc.customer && frm2.doctype !== DOCTYPES.STOCK_ENTRY) {
      frappe.show_alert(__("(MIS): Please select customer first"));
      return;
    }
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
    let dialogCollapse = actions.find(".dialog-collapse-btn");
    let icon = dialogCollapse.find(".dialog-collapse-btn-icon");
    MISApp.misToggleDialogCollapse = function() {
      dialogCollapse = actions.find(".dialog-collapse-btn");
      icon = dialogCollapse.find(".dialog-collapse-btn-icon");
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
    };
    actions.prepend(`
        <button class="btn btn-arrow dialog-collapse-btn" onclick="MISApp.misToggleDialogCollapse()" 
            data-toggle="tooltip" data-placement="bottom" title="(Shift+${MISApp.settings.dialog_open_and_collapse_keyboard_shortcut_key})"
            data-delay='50'
            >
            <i class="fa fa-arrow-up dialog-collapse-btn-icon" aria-hidden="true"></i>
        </button>`);
  }

  // ../multi_items_select/multi_items_select/public/mis/dialogs/add_item_dialog.js
  var add_item_dialog_default = (item_code, warehouse2) => {
    const selected_item = MISApp.misLastSearchData.find((el) => el.item_code === item_code);
    const { item_name, actual_qty, reserved_qty, mis_has_packed_item } = selected_item;
    console.log("selected_item: ", selected_item, MISApp.misSelectedItem);
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
        const itemsGrid = cur_frm.get_field("items").grid;
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
          () => row = itemsGrid.add_new_row(),
          () => frappe.timeout(1),
          async () => {
            let args = {};
            args["item_code"] = item_code;
            args["qty"] = values.qty;
            let warehouseFieldName = "";
            if (cur_frm.doctype === DOCTYPES.STOCK_ENTRY) {
              warehouseFieldName = "s_warehouse";
            } else {
              warehouseFieldName = "warehouse";
            }
            args[warehouseFieldName] = values.warehouse;
            frappe.model.set_value(row.doctype, row.name, args);
            setTimeout(() => {
              row[warehouseFieldName] = warehouse2;
              frappe.model.set_value(row.doctype, row.name, args);
              cur_frm.trigger(warehouseFieldName, row.doctype, row.name);
            }, 1e3);
          }
        ]);
        frappe.show_alert(__("(MIS): Item Added!"));
        d.hide();
      }
    });
    d.show();
    d.set_value("item_code", item_code);
    d.set_value("item_name", item_name);
    d.set_value("warehouse", warehouse2);
    d.set_value("actual_qty", actual_qty);
    d.set_value("reserved_qty", reserved_qty);
    d.set_value("sellable_qty", sellable_qty);
    if ($(document).width() > (MISApp.settings.wide_dialog_enable_on_screen_size ? MISApp.settings.wide_dialog_enable_on_screen_size : 1500)) {
      d.$wrapper.find(".modal-content").css({
        "width": "200%",
        "margin": "0 auto",
        "left": "50%",
        "transform": "translateX(-50%)"
      });
    }
  };

  // ../multi_items_select/multi_items_select/public/mis/dialogs/add_packed_item_dialog.js
  var add_packed_item_dialog_default = async (packed_item_code) => {
    let can_bypass = await getCanBypass();
    let qd = new frappe.ui.Dialog({
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
          const row2 = cur_frm.mis_last_packed_items_search_data[i];
          const sellable_qty = row2.actual_qty - row2.reserved_qty;
          if (row2.actual_qty > sellable_qty) {
            switch (settings.sellable_qty_action) {
              case "Nothing":
                break;
              case "Warn":
                frappe.msgprint(__(`Warning: Item <strong>${row2.item_code}</strong> with Qty (${row2.actual_qty}) is higher than the Sellable Qty (${sellable_qty}) however your item got inserted successfully`), "MIS");
                break;
              case "Stop":
                if (can_bypass) {
                  frappe.msgprint(__(`Warning: Item <strong>${row2.item_code}</strong> with Qty (${row2.actual_qty}) is higher than the Sellable Qty (${sellable_qty}) however your item got inserted successfully`), "MIS");
                  break;
                } else {
                  frappe.msgprint(__(`Cannot Insert: Item <strong>${row2.item_code}</strong> with Qty (${row2.actual_qty}) is higher than the Sellable Qty (${sellable_qty})`), "MIS");
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
              args["item_code"] = row2.item_code;
              args["qty"] = row2.qty * values.qty;
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
        qd.hide();
      }
    });
    qd.show();
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
        MISApp.misToggleDialogCollapse();
      }
    });
    await d.show();
    MISApp.misToggleDialogCollapse();
    if ($(document).width() > (MISApp.settings.wide_dialog_enable_on_screen_size ? MISApp.settings.wide_dialog_enable_on_screen_size : 1500)) {
      d.$wrapper.find(".modal-content").css({
        "width": "200%",
        "margin": "0 auto",
        "left": "50%",
        "transform": "translateX(-50%)"
      });
    }
    var config = {
      fps: 30,
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
        MISApp.misToggleDialogCollapse();
      }, (d1, d2) => {
      });
    }, 1e3);
  };

  // ../multi_items_select/multi_items_select/public/mis/mis_main.js
  frappe.provide("MISApp");
  $(document).on("app_ready", function() {
    for (let k in DOCTYPES) {
      const DOC = DOCTYPES[k];
      const METHODS = {
        setup: async function(frm2) {
          let settings2 = await getSettings();
          if (!settings2.enabled)
            return;
          MISApp.settings = settings2;
          MISApp.canBypass = await getCanBypass();
          MISApp.misDialog = mis_dialog_default;
          MISApp.misDialogCollapsed = false;
          MISApp.misToggleDialogCollapse = null;
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
          if (settings2.enable_qrcodebarcode_direct_scanner_button) {
            setupScannerButton(frm2);
          }
          const cbtn = frm2.fields_dict["items"].grid.add_custom_button(__("MIS Insert"), function() {
            mis_dialog_default(frm2);
          }).addClass("btn-primary");
          if (localStorage.getItem("mis_reopen")) {
            mis_dialog_default(frm2);
            highlightField(frm2, "items");
            localStorage.removeItem("mis_reopen");
          }
        }
      };
      if (DOC === DOCTYPES.SALES_INVOICE) {
        METHODS["custom_sales_type"] = function(frm2) {
          console.log(`custom field is on sales invoice`, frm2);
        };
      }
      frappe.ui.form.on(DOC, METHODS);
    }
  });
  function setupScannerButton(frm2) {
    let scannerBtn = frm2.add_custom_button("MIS Scanner", () => {
      mis_dialog_default(frm2, true);
    });
    scannerBtn.html(`
            <i class="qrcode-icon-custom-btn fa fa-qrcode" style="font-size: 24px" ></i>
        `);
  }
})();
//# sourceMappingURL=mis.bundle.I6L4KNJC.js.map
