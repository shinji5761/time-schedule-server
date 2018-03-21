"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
var PORT = process.port || 8080;
var Main = (function () {
    function Main() {
        this.routing();
        this.listen();
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
            console.log('listen... port:', PORT);
        });
    };
    return Main;
}());
var main = new Main();
