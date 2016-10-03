System.register(['angular2/http', 'angular2/core', 'rxjs/Rx', 'rxjs/add/operator/map'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var http_1, core_1;
    var GymDetailService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {},
            function (_2) {}],
        execute: function() {
            GymDetailService = (function () {
                function GymDetailService(_http) {
                    this._http = _http;
                    this._url = "http://23.97.57.90/v1/gym/detail/57484afbe3e07ac60d4a273a";
                }
                GymDetailService.prototype.getGymDetail = function () {
                    var headers = new http_1.Headers({
                        "Access-Control-Allow-Origin": "http://23.97.57.90/",
                        "Access-Control-Allow-Methods": "GET, POST, PUT",
                        "Access-Control-Allow-Headers": "Content-Type"
                    });
                    var options = new http_1.RequestOptions({
                        headers: headers
                    });
                    return this._http.get(this._url, options)
                        .map(function (res) { return res.json(); });
                };
                GymDetailService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], GymDetailService);
                return GymDetailService;
            }());
            exports_1("GymDetailService", GymDetailService);
        }
    }
});
//# sourceMappingURL=gymdetail.service.js.map