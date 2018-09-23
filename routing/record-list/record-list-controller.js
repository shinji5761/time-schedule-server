"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var controller_1 = require("../common/controller");
var record_list_dao_1 = require("./record-list-dao");
var RecordListController = (function (_super) {
    __extends(RecordListController, _super);
    /**
     * @constructor
     * @param app { any }
     * @param url { string }
     * @param dao { Dao }
     */
    function RecordListController(app, url) {
        return _super.call(this, app, url, new record_list_dao_1.RecordListDao()) || this;
    }
    return RecordListController;
}(controller_1.Controller));
exports.RecordListController = RecordListController;
