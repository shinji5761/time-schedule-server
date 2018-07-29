"use strict";
exports.__esModule = true;
// Logger
var log4js = require("log4js");
log4js.configure('logger/config/log4js.json');
var Logger = (function () {
    function Logger() {
        this.applog = log4js.getLogger('app');
        this.errorlog = log4js.getLogger('error');
    }
    return Logger;
}());
exports.Logger = Logger;
