"use strict";
exports.__esModule = true;
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
// Logger
var log4js = require("log4js");
var logger_1 = require("./logger/logger");
var logger = new logger_1.Logger();
// Controller
var record_controller_1 = require("./routing/record/record-controller");
/**
 * @const
 * @type { number }
 */
var PORT = process.env.PORT || 8080;
/**
 * @class Main
 */
var Main = (function () {
    function Main() {
        this.middleware();
        this.routing();
        this.listen();
    }
    /**
     * @return { void }
     */
    Main.prototype.middleware = function () {
        // Cross Originの許可
        app.use(function (req, res, next) {
            res.header('Access-Control-Allow-origin', '*');
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });
        // body-parserの設定
        app.use(bodyParser.urlencoded({
            extended: true
        }));
        app.use(bodyParser.json());
        // logger
        app.use(log4js.connectLogger(log4js.getLogger("http"), { level: 'auto' }));
    };
    /**
     * @return { void }
     */
    Main.prototype.routing = function () {
        var controller = {};
        controller['record'] = new record_controller_1.RecordController(app, '/record');
        app.get('/', function (request, response) {
            logger.applog.debug('access!');
            response.send('HelloWorld');
        });
    };
    /**
     * @return { void }
     */
    Main.prototype.listen = function () {
        app.listen(PORT, function (error) {
            if (error) {
                console.error(error);
            }
            console.log('listen... port:', PORT);
        });
    };
    return Main;
}());
var main = new Main();
