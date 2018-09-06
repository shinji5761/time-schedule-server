"use strict";
exports.__esModule = true;
// Logger
var logger_1 = require("../../logger/logger");
var logger = new logger_1.Logger();
var Dao = (function () {
    function Dao(sqlManager) {
        this.sqlManager = sqlManager;
    }
    /**
     * @param params { any }
     * @param callback { Function }
     * @param caller { any }
     * @return { void }
     */
    Dao.prototype.get = function (params, callback, caller) {
        var _this = this;
        logger.debugLogger(this.constructor.name, 'get', 'start');
        var result;
        var status = 500;
        try {
            this.sqlManager.get(params, function (error, result) {
                if (error) {
                    callback.call(caller, error, status);
                    return;
                }
                if (result.length == 0) {
                    logger.errorLogger(_this.constructor.name, 'get', 'NotFound');
                    status = 404;
                }
                else {
                    logger.infoLogger(_this.constructor.name, 'get', 'SQL Query Result : ' + result);
                    status = 200;
                }
                callback.call(caller, result, status);
            }, this);
        }
        catch (error) {
            logger.errorLogger(this.constructor.name, 'get', 'Dao Exception:' + error);
            // 場合分けが必要
            callback.call(caller, error, status);
        }
    };
    /**
     * @param params { any }
     * @param callback { Function }
     * @param caller { any }
     * @return { void }
     */
    Dao.prototype.post = function (params, callback, caller) {
        var _this = this;
        logger.debugLogger(this.constructor.name, 'post', 'start');
        var result;
        var status = 500;
        try {
            this.sqlManager.post(params, function (error, result) {
                if (error) {
                    callback.call(caller, error, status);
                    return;
                }
                logger.infoLogger(_this.constructor.name, 'post', 'SQL Query Result : ' + result);
                status = 200;
                callback.call(caller, result, status);
            }, this);
        }
        catch (error) {
            logger.errorLogger(this.constructor.name, 'post', 'Dao Exception:' + error);
            // 場合分けが必要
            callback.call(caller, error, status);
        }
    };
    return Dao;
}());
exports.Dao = Dao;
