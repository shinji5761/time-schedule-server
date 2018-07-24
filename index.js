"use strict";
exports.__esModule = true;
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
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
    };
    /**
     * @return { void }
     */
    Main.prototype.routing = function () {
        var controller = {};
        controller['record'] = new record_controller_1.RecordController(app, '/record');
        app.get('/', function (request, response) { response.send('HelloWorld'); });
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
