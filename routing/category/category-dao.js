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
var dao_1 = require("../common/dao");
var category_manager_1 = require("./category-manager");
var CategoryDao = (function (_super) {
    __extends(CategoryDao, _super);
    function CategoryDao() {
        return _super.call(this, new category_manager_1.CategoryManager()) || this;
    }
    return CategoryDao;
}(dao_1.Dao));
exports.CategoryDao = CategoryDao;
