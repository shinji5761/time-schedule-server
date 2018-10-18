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
     * データ追加
     *
     * @param param { any } 検索パラメータ
     * @param callback { Function } 戻り関数
     * @param caller { any } 呼び出し元
     */
    RecordManager.prototype.post = function (param, callback, caller) {
        var _this = this;
        logger.debugLogger(this.constructor.name, 'post', 'start');
        var result = [];
        var db = this.dbConnect();
        db.connect()
            .then(function () {
            var query = new _this.pg.Query("INSERT INTO record(\n                    recording_date, record_time, parent_category_id, child_category_id, memo\n                ) values($1,$2,$3,$4,$5);\n                ", [param['recording_date'], param['record_time'], param['parent_category_id'], param['child_category_id'], param['memo']]);
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
    RecordManager.prototype.put = function (param, callback, caller) {
        var _this = this;
        logger.debugLogger(this.constructor.name, 'put', 'start');
        var result = [];
        var db = this.dbConnect();
        db.connect()
            .then(function () {
            var query = new _this.pg.Query("UPDATE record SET recording_date = $1, record_time = $2, parent_category_id = $3, child_category_id = $4, memo = $5\n                 WHERE no = $6\n                ", [param['recording_date'], param['record_time'], param['parent_category_id'], param['child_category_id'], param['memo'], param['no']]);
            db.query(query);
            query.on('error', function (error) {
                logger.errorLogger(_this.constructor.name, 'put', 'query error');
                callback.call(caller, error);
                db.end();
            });
            query.on('end', function (result) {
                callback.call(caller, undefined, result);
                db.end();
            });
        })["catch"](function (error) {
            logger.errorLogger(_this.constructor.name, 'put', 'connection error');
            callback.call(caller, error);
        });
    };
    /**
     * データ削除
     *
     * @param param { any } 検索パラメータ
     * @param callback { Function } 戻り関数
     * @param caller { any } 呼び出し元
     */
    RecordManager.prototype["delete"] = function (param, callback, caller) {
        var _this = this;
        logger.debugLogger(this.constructor.name, 'delete', 'start');
        var result = [];
        var db = this.dbConnect();
        db.connect()
            .then(function () {
            var query = new _this.pg.Query("DELETE FROM record WHERE no = $1;", [param['no']]);
            db.query(query);
            query.on('error', function (error) {
                logger.errorLogger(_this.constructor.name, 'delete', 'query error');
                callback.call(caller, error);
                db.end();
            });
            query.on('end', function (result) {
                callback.call(caller, undefined, result);
                db.end();
            });
        })["catch"](function (error) {
            logger.errorLogger(_this.constructor.name, 'delete', 'connection error');
            callback.call(caller, error);
        });
    };
    RecordManager.prototype.query = function (param, callback, caller) {
    };
    return RecordManager;
}(sql_manager_1.SqlManager));
exports.RecordManager = RecordManager;
