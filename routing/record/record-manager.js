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
var sql_manager_1 = require("../common/sql-manager");
/**
 * @class RecordManager
 * @extends SqlManager
 * @export
 */
var RecordManager = (function (_super) {
    __extends(RecordManager, _super);
    function RecordManager() {
        return _super.call(this) || this;
    }
    /**
     * データ取得(リスト)
     *
     * @param param { any } 検索パラメータ
     * @param callback { Function } 戻り関数
     * @param caller { any } 呼び出し元
     */
    RecordManager.prototype.get = function (param, callback, caller) {
        var _this = this;
        var result = [];
        var db = this.dbConnect();
        db.connect()
            .then(function () {
            var query = new _this.pg.Query('SELECT * FROM record;', []);
            db.query(query);
            query.on('error', function (error) {
                callback.call(caller, error);
            });
            query.on('row', function (row) {
                result.push(row);
            });
            query.on('end', function () {
                callback.call(caller, undefined, result);
                db.end();
            });
        })["catch"](function (error) {
            callback.call(caller, error);
        });
    };
    /**
     * データ取得(リスト)
     *
     * @param param { any } 検索パラメータ
     * @param callback { Function } 戻り関数
     * @param caller { any } 呼び出し元
     */
    RecordManager.prototype.query = function (param, callback, caller) {
        callback.call(caller);
    };
    /**
     * データ追加
     *
     * @param param { any } 検索パラメータ
     * @param callback { Function } 戻り関数
     * @param caller { any } 呼び出し元
     */
    RecordManager.prototype.post = function (param, callback, caller) {
        var _this = this;
        var result = [];
        var db = this.dbConnect();
        db.connect()
            .then(function () {
            var query = new _this.pg.Query("INSERT INTO record(\n                    recording_date, record_time, parent_category_id, child_category_id\n                ) values($1,$2,$3,$4);\n                ", [param['recordingDate'], param['recordTime'], param['parentCategoryId'], param['childCategoryId']]);
            db.query(query);
            query.on('error', function (error) {
                callback.call(caller, error);
                db.end();
            });
            query.on('end', function (result) {
                callback.call(caller, undefined, result);
                db.end();
            });
        })["catch"](function (error) {
            callback.call(caller, error);
        });
    };
    /**
     * データ更新
     *
     * @param param { any } 検索パラメータ
     * @param callback { Function } 戻り関数
     * @param caller { any } 呼び出し元
     */
    RecordManager.prototype.put = function (param, callback, caller) {
        callback.call(caller);
    };
    /**
     * データ削除
     *
     * @param param { any } 検索パラメータ
     * @param callback { Function } 戻り関数
     * @param caller { any } 呼び出し元
     */
    RecordManager.prototype["delete"] = function (param, callback, caller) {
        callback.call(caller);
    };
    return RecordManager;
}(sql_manager_1.SqlManager));
exports.RecordManager = RecordManager;
