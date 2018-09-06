"use strict";
exports.__esModule = true;
// Logger
var log4js = require("log4js");
log4js.configure('logger/config/log4js.json');
var Logger = (function () {
    function Logger() {
        this.applog = log4js.getLogger('app');
        this.errorlog = log4js.getLogger('error');
    }
    /**
     * DebugLog 表示用メソッド
     * @param className { string } クラス名
     * @param methodName { string } メソッド名
     * @param message { string } メッセージ
     */
    Logger.prototype.debugLogger = function (className, methodName, message) {
        this.applog.debug('[' + className + '] - ' + methodName + ' - ' + message);
    };
    /**
     * InfoLog 表示用メソッド
     * @param className { string } クラス名
     * @param methodName { string } メソッド名
     * @param message { string } メッセージ
     */
    Logger.prototype.infoLogger = function (className, methodName, message) {
        this.applog.info('[' + className + '] - ' + methodName + ' - ' + message);
    };
    /**
     * ErrorLog 表示用メソッド
     * @param className { string } クラス名
     * @param methodName { string } メソッド名
     * @param message { string } メッセージ
     */
    Logger.prototype.errorLogger = function (className, methodName, message) {
        this.errorlog.info('[' + className + '] - ' + methodName + ' - ' + message);
    };
    return Logger;
}());
exports.Logger = Logger;
