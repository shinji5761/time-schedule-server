"use strict";
exports.__esModule = true;
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
    }
    /**
     * @param response { any }
     * @param result { any } 返却する値
     * @param status { any } ステータス(200,500など)
     */
    Controller.prototype.returnResult = function (response, result, status) {
        response.status(status);
        response.send(result);
    };
    /**
     * @param request { any }
     * @param response { any }
     */
    Controller.prototype.get = function (request, response) {
        var _this = this;
        var body = request.body;
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
        this.dao.post(body, function (result, status) {
            _this.returnResult(response, result, status);
        }, this);
    };
    return Controller;
}());
exports.Controller = Controller;
