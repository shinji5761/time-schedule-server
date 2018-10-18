"use strict";
exports.__esModule = true;
// Logger
var logger_1 = require("../../logger/logger");
var logger = new logger_1.Logger();
var Controller = (function () {
    /**
     * @constructor
     * @param app { any }
     * @param url { string }
     * @param dao { Dao }
     */
    function Controller(app, url, dao) {
        var _this = this;
        this.url = url;
        this.dao = dao;
        app.get(url, function (request, response) { _this.get(request, response); });
        app.post(url, function (request, response) { _this.post(request, response); });
        app.put(url, function (request, response) { _this.put(request, response); });
        app["delete"](url, function (request, response) { _this["delete"](request, response); });
    }
    /**
     * @param response { any }
     * @param result { any } 返却する値
     * @param status { any } ステータス(200, 500など)
     */
    Controller.prototype.returnResult = function (response, result, status) {
        logger.infoLogger(this.constructor.name, 'returnResult', 'status : ' + status);
        logger.infoLogger(this.constructor.name, 'returnResult', 'result : ' + result);
        response.status(status);
        response.send(result);
    };
    /**
     * @param request { any }
     * @param response { any }
     */
    Controller.prototype.get = function (request, response) {
        var _this = this;
        var body = request.query;
        logger.infoLogger(this.constructor.name, 'get', 'Request Parameter = ' + body);
        this.dao.get(body, function (result, status) {
            _this.returnResult(response, result, status);
        }, this);
    };
    /**
     * @param request { any }
     * @param response { any }
     */
    Controller.prototype.post = function (request, response) {
        var _this = this;
        var body = request.body;
        logger.infoLogger(this.constructor.name, 'post', 'Request Parameter = ' + body);
        this.dao.post(body, function (result, status) {
            _this.returnResult(response, result, status);
        }, this);
    };
    /**
     * @param request { any }
     * @param response { any }
     */
    Controller.prototype.put = function (request, response) {
        var _this = this;
        var body = request.body;
        logger.infoLogger(this.constructor.name, 'put', 'Request Parameter = ' + body);
        this.dao.put(body, function (result, status) {
            _this.returnResult(response, result, status);
        }, this);
    };
    Controller.prototype["delete"] = function (request, response) {
        var _this = this;
        var body = request.body;
        logger.infoLogger(this.constructor.name, 'delete', 'Request Parameter = ' + body);
        this.dao["delete"](body, function (result, status) {
            _this.returnResult(response, result, status);
        }, this);
    };
    return Controller;
}());
exports.Controller = Controller;
