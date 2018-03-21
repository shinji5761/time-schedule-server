"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
var PORT = process.env.PORT || 5000;
var Main = (function () {
    function Main() {
        this.middleware();
        this.routing();
        this.listen();
    }
    Main.prototype.middleware = function () {
        // Cross Originの許可
        app.use(function (req, res, next) {
            res.header('Access-Control-Allow-origin', '*');
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });
    };
    Main.prototype.routing = function () {
        app.get('/', function (request, response) { response.send('HelloWorld'); });
    };
    // 実行開始
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
