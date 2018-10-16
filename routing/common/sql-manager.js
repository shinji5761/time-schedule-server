"use strict";
exports.__esModule = true;
var pg = require("pg");
// import data = require( '../../config/database.json');
var data = require("../../config/database-heroku.json");
// Logger
var logger_1 = require("../../logger/logger");
var logger = new logger_1.Logger();
/**
 * @type { string }
 */
var host = data['host'];
/**
 * @type { number }
 */
var port = data['port'];
/**
 * @type { string }
 */
var user = data['user'];
/**
 * @type { string }
 */
var password = data['password'];
/**
 * @type { string }
 */
var database = data['database'];
// Poolingの設定
pg.Pool({
    'host': host,
    'user': user,
    'max': 20,
    'idleTimeoutMillis': 30000,
    'connectionTimeoutMillis': 2000
});
/**
 * @class SqlManager
 * @export
 */
var SqlManager = (function () {
    /**
     * Constructor
     */
    function SqlManager() {
        this.pg = pg;
    }
    /**
     * データベース コネクション メソッド
     * @return { pg.Client }
     */
    SqlManager.prototype.dbConnect = function () {
        return new pg.Client({
            'host': host,
            'user': user,
            'port': port,
            'password': password,
            'database': database,
            'ssl': true
        });
    };
    /**
     * @protected
     * @param param { Object } 検索するパラメータ
     * @return { string } SQLのWHERE句
     */
    SqlManager.prototype.createSearchParam = function (param) {
        var result = '';
        var keys = Object.keys(param);
        for (var index = 0; index < keys.length; index++) {
            if (param[keys[index]] == null)
                continue; // パラメータがない場合は次のキーへ
            result = result + keys[index] + ' = ' + '$' + (index + 1);
            if (index < keys.length - 1) {
                result = result + ' AND ';
            }
        }
        if (result != '')
            result = ' WHERE ' + result;
        return result;
    };
    /**
     * @protected
     * @param param { Object } 検索するパラメータ
     * @return { Array<any> } 検索パラメータの配列
     */
    SqlManager.prototype.createSearchValues = function (param) {
        var result = [];
        var keys = Object.keys(param);
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            result.push(param[key]);
        }
        return result;
    };
    return SqlManager;
}());
exports.SqlManager = SqlManager;
