"use strict";
exports.__esModule = true;
var Dao = (function () {
    function Dao() {
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
            result = { 'api': 'get' };
            status = 200;
        }
        catch (e) {
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
