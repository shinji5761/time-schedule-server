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
var user = data['user'];
var password = data['password'];
var database = data['database'];
var db = new pg.Client({
    'host': host,
    'user': user,
    'port': port,
    'password': password,
    'database': database
});
pg.Pool({
    'host': host,
    'user': user,
    'max': 20,
    'idleTimeoutMillis': 30000,
    'connectionTimeoutMillis': 2000
});
/**
 *
 */
var SqlManager = (function () {
    function SqlManager() {
    }
    /**
     *
     * @param param { any }
     * @return { any }
     */
    SqlManager.prototype.get = function (param, callback, caller) {
        logger.applog.debug('[start]SqlManager get');
        db.connect()
            .then(function () {
            logger.applog.debug('cxonnection success');
            db.query('SELECT * FROM record;', [], function (error, result) {
                if (error) {
                    callback.call(caller, error);
                }
                else if (result != undefined) {
                    callback.call(caller, result.rows);
                }
                else {
                    callback.call(caller, undefined);
                }
            });
        })["catch"](function (error) {
            logger.applog.error('cxonnection error');
        });
    };
    return SqlManager;
}());
exports.SqlManager = SqlManager;
