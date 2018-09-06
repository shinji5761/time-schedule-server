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
    return SqlManager;
}());
exports.SqlManager = SqlManager;
