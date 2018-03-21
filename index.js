"use strict";
exports.__esModule = true;
var express = require("express");
var app = express.app();
var PORT = prosess.port || 8080;
var Main = (function () {
    function Main() {
    }
    Main.prototype.middleware = function () {
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
            console.log('listen... port = ', PORT);
        });
    };
    return Main;
}());
var main = new Main();
