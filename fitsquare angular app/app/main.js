System.register(['raven-js', 'angular2/platform/browser', './app.component', 'angular2/core', 'angular2/http', 'angular2/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var raven_js_1, browser_1, app_component_1, core_1, http_1, router_1;
    var RavenExceptionHandler;
    return {
        setters:[
            function (raven_js_1_1) {
                raven_js_1 = raven_js_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            raven_js_1.default
                .config('https://77e258c1f22d4b6fa743c9491038cf79@app.getsentry.com/85183')
                .install();
            RavenExceptionHandler = (function () {
                function RavenExceptionHandler() {
                }
                RavenExceptionHandler.prototype.call = function (err) {
                    raven_js_1.default.captureException(err.originalException);
                };
                return RavenExceptionHandler;
            }());
            browser_1.bootstrap(app_component_1.AppComponent, [http_1.HTTP_PROVIDERS, router_1.ROUTER_PROVIDERS, http_1.JSONP_PROVIDERS, http_1.HTTP_BINDINGS,
                core_1.provide(core_1.ExceptionHandler, { useClass: RavenExceptionHandler })
            ]).catch(function (err) { return console.error(err); });
        }
    }
});
//# sourceMappingURL=main.js.map