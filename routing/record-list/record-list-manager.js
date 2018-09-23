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
// Logger
var logger_1 = require("../../logger/logger");
var logger = new logger_1.Logger();
/**
 * @class RecordListManager
 * @extends SqlManager
 * @export
 */
var RecordListManager = (function (_super) {
    __extends(RecordListManager, _super);
    function RecordListManager() {
        return _super.call(this) || this;
    }
    /**
     * データ取得(リスト)
     *
     * @param param { any } 検索パラメータ
     * @param callback { Function } 戻り関数
     * @param caller { any } 呼び出し元
     */
    RecordListManager.prototype.get = function (param, callback, caller) {
        var _this = this;
        console.dir(param);
        var result = [];
        var db = this.dbConnect();
        db.connect()
            .then(function () {
            var sql = 'SELECT * FROM record' + _this.createSearchParam(param);
            var values = _this.createSearchValues(param);
            var query = new _this.pg.Query(sql, values);
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
    RecordListManager.prototype.query = function (param, callback, caller) {
        callback.call(caller);
    };
    /**
     * データ追加
     *
     * @param param { any } 検索パラメータ
     * @param callback { Function } 戻り関数
     * @param caller { any } 呼び出し元
     */
    RecordListManager.prototype.post = function (param, callback, caller) {
        var _this = this;
        logger.debugLogger(this.constructor.name, 'post', 'start');
        var result = [];
        var db = this.dbConnect();
        db.connect()
            .then(function () {
            var query = new _this.pg.Query("INSERT INTO record(\n                    recording_date, record_time, parent_category_id, child_category_id, memo\n                ) values($1,$2,$3,$4,$5);\n                ", [param['recordingDate'], param['recordTime'], param['parentCategoryId'], param['childCategoryId'], param['memo']]);
            db.query(query);
            query.on('error', function (error) {
                logger.errorLogger(_this.constructor.name, 'post', 'query error');
                callback.call(caller, error);
                db.end();
            });
            query.on('end', function (result) {
                callback.call(caller, undefined, result);
                db.end();
            });
        })["catch"](function (error) {
            logger.errorLogger(_this.constructor.name, 'post', 'connection error');
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
    RecordListManager.prototype.put = function (param, callback, caller) {
        callback.call(caller);
    };
    /**
     * データ削除
     *
     * @param param { any } 検索パラメータ
     * @param callback { Function } 戻り関数
     * @param caller { any } 呼び出し元
     */
    RecordListManager.prototype["delete"] = function (param, callback, caller) {
        callback.call(caller);
    };
    return RecordListManager;
}(sql_manager_1.SqlManager));
exports.RecordListManager = RecordListManager;
