"use strict";
exports.__esModule = true;
var sql_manager_1 = require("./sql-manager");
// Logger
var logger_1 = require("../../logger/logger");
var logger = new logger_1.Logger();
var Dao = (function () {
    function Dao() {
        this.sqlManager = new sql_manager_1.SqlManager();
    }
    /**
     * @param params { any }
     * @param callback { Function }
     * @param caller { any }
     * @return { void }
     */
    Dao.prototype.get = function (params, callback, caller) {
        var result;
        var status;
        try {
            this.sqlManager.get('');
            status = 200;
        }
        catch (e) {
            logger.errorlog.error('sql error:' + e);
            // 場合分けが必要
            status = 303;
        }
        callback.call(caller, result, status);
    };
    /**
     * @param params { any }
     * @param callback { Function }
     * @param caller { any }
     * @return { void }
     */
    Dao.prototype.post = function (params, callback, caller) {
        var result;
        var status;
        try {
            result = { 'api': 'post' };
            status = 200;
        }
        catch (e) {
            // 場合分けが必要
            status = 303;
        }
        callback.call(caller, result, status);
    };
    return Dao;
}());
exports.Dao = Dao;
