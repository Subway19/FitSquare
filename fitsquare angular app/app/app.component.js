System.register(['angular2/core', './footer/footer.component', './aboutus/aboutus.component', './navbar/navbar.component', './careers/careers.component', './home/welcome.component', './dialog/dialog.component', './gym/gymview.component', 'rxjs/Rx', 'angular2/router', 'angular2/http'], function(exports_1, context_1) {
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
    var core_1, footer_component_1, aboutus_component_1, navbar_component_1, careers_component_1, welcome_component_1, dialog_component_1, gymview_component_1, router_1, http_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (footer_component_1_1) {
                footer_component_1 = footer_component_1_1;
            },
            function (aboutus_component_1_1) {
                aboutus_component_1 = aboutus_component_1_1;
            },
            function (navbar_component_1_1) {
                navbar_component_1 = navbar_component_1_1;
            },
            function (careers_component_1_1) {
                careers_component_1 = careers_component_1_1;
            },
            function (welcome_component_1_1) {
                welcome_component_1 = welcome_component_1_1;
            },
            function (dialog_component_1_1) {
                dialog_component_1 = dialog_component_1_1;
            },
            function (gymview_component_1_1) {
                gymview_component_1 = gymview_component_1_1;
            },
            function (_1) {},
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.pageTitle = 'FitSquare';
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'pm-app',
                        template: "\n        <div>\n            <pm-navbar> </pm-navbar>\n            <router-outlet></router-outlet>\n        \n            <pm-footer></pm-footer>\n        </div>\n    \n        \n        ",
                        styleUrls: ['app/aboutus/production.min.css'],
                        directives: [footer_component_1.Footer, aboutus_component_1.Aboutus, navbar_component_1.Navbar, welcome_component_1.WelcomeComponent, careers_component_1.Careers, dialog_component_1.Dialog, gymview_component_1.Gymview, router_1.RouterOutlet, router_1.RouterLink],
                        providers: [router_1.ROUTER_PROVIDERS, http_1.HTTP_PROVIDERS]
                    }),
                    router_1.RouteConfig([
                        { path: '/aboutus', name: 'Aboutus11', component: aboutus_component_1.Aboutus },
                        { path: '/careers', name: 'Careers', component: careers_component_1.Careers },
                        { path: '/gym', name: 'Gymview', component: gymview_component_1.Gymview },
                        { path: '/*other', name: 'Other', redirectTo: ['WelcomeComponent'] },
                        { path: '/', name: 'WelcomeComponent', component: welcome_component_1.WelcomeComponent, useAsDefault: true }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map