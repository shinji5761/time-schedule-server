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
var record_list_controller_1 = require("./routing/record-list/record-list-controller");
var category_controller_1 = require("./routing/category/category-controller");
/**
 * @const
 * @type { any }
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
            res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
            res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
            next();
        });
        // body-parserの設定
        app.use(bodyParser.urlencoded({
            extended: true
        }));
        app.use(bodyParser.json());
        // logger
        app.use(log4js.connectLogger(log4js.getLogger('http'), { level: 'auto' }));
    };
    /**
     * @return { void }
     */
    Main.prototype.routing = function () {
        var _this = this;
        var controller = {};
        controller['record'] = new record_controller_1.RecordController(app, '/record');
        controller['record/list'] = new record_list_controller_1.RecordListController(app, '/record/list');
        controller['category'] = new category_controller_1.CategoryController(app, '/category');
        app.get('/', function (request, response) {
            logger.debugLogger(_this.constructor.name, 'routhing', 'access');
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
