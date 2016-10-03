System.register(['angular2/core', './gymdetail.service', 'angular2/http'], function(exports_1, context_1) {
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
    var core_1, gymdetail_service_1, http_1;
    var Gymview;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (gymdetail_service_1_1) {
                gymdetail_service_1 = gymdetail_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            Gymview = (function () {
                function Gymview(_gymdetailservice) {
                    this._gymdetailservice = _gymdetailservice;
                    //this is a replica of view.ejs
                    this.gymdata = {
                        status: Boolean,
                        name: String,
                        about: String,
                        locality: String,
                        address: String,
                        timings: String
                    };
                    this.infrastructure = {
                        steamRoom: Boolean,
                        lounge: Boolean,
                        petFriendly: Boolean,
                        shower: Boolean,
                        locker: Boolean,
                        canteen: Boolean,
                        swimming: Boolean
                    };
                    this.offerings = {
                        athleticClub: Boolean,
                        certifiedTrainers: Boolean,
                        strengthening: Boolean,
                        punchBags: Boolean,
                        personalTrainer: Boolean,
                        stretching: Boolean,
                        circuitTraining: Boolean,
                        groupClasses: Boolean,
                        boxingRings: Boolean,
                        bodyBuilding: Boolean,
                        weightLose: Boolean,
                        weightgain: Boolean,
                        pregnancy: Boolean
                    };
                    //extra redundant code for setting li's active and inactive
                    this.steamRoom = this.infrastructure.steamRoom;
                    this.lounge = this.infrastructure.lounge;
                    this.petFriendly = this.infrastructure.petFriendly;
                    this.shower = this.infrastructure.shower;
                    this.locker = this.infrastructure.locker;
                    this.canteen = this.infrastructure.canteen;
                    this.swimming = this.infrastructure.swimming;
                    this.athleticClub = this.offerings.athleticClub;
                    this.certifiedTrainers = this.offerings.certifiedTrainers;
                    this.strengthening = this.offerings.strengthening;
                    this.punchBags = this.offerings.punchBags;
                    this.personalTrainer = this.offerings.personalTrainer;
                    this.stretching = this.offerings.stretching;
                    this.circuitTraining = this.offerings.circuitTraining;
                    this.groupClasses = this.offerings.groupClasses;
                    this.boxingRings = this.offerings.boxingRings;
                    this.bodyBuilding = this.offerings.bodyBuilding;
                    this.weightLose = this.offerings.weightLose;
                    this.weightgain = this.offerings.weightgain;
                    this.pregnancy = this.offerings.pregnancy;
                }
                Gymview.prototype.ngOnInit = function () {
                    var _this = this;
                    this._gymdetailservice.getGymDetail()
                        .subscribe(function (gymdata) {
                        _this.gymdata.status = gymdata.status, _this.gymdata.name = gymdata.data.name, _this.gymdata.about = gymdata.data.about;
                        _this.gymdata.locality = gymdata.data.locality, _this.gymdata.address = gymdata.data.address, _this.gymdata.timings = gymdata.data.timings,
                            _this.infrastructure.steamRoom = gymdata.data.infrastructure.steamRoom, _this.infrastructure.lounge = gymdata.data.infrastructure.lounge, _this.infrastructure.petFriendly = gymdata.data.infrastructure.petFriendly,
                            _this.infrastructure.shower = gymdata.data.infrastructure.shower, _this.infrastructure.locker = gymdata.data.infrastructure.locker, _this.infrastructure.canteen = gymdata.data.infrastructure.canteen, _this.infrastructure.swimming = gymdata.data.infrastructure.swimming,
                            _this.offerings.athleticClub = gymdata.data.offerings.athleticClub, _this.offerings.certifiedTrainers = gymdata.data.offerings.certifiedTrainers, _this.offerings.strengthening = gymdata.data.offerings.strengthening, _this.offerings.punchBags = gymdata.data.offerings.punchBags,
                            _this.offerings.personalTrainer = gymdata.data.offerings.personalTrainer, _this.offerings.stretching = gymdata.data.offerings.stretching, _this.offerings.circuitTraining = gymdata.data.offerings.circuitTraining, _this.offerings.groupClasses = gymdata.data.offerings.groupClasses,
                            _this.offerings.boxingRings = gymdata.data.offerings.boxingRings, _this.offerings.bodyBuilding = gymdata.data.offerings.bodyBuilding, _this.offerings.weightLose = gymdata.data.offerings.weightLose,
                            _this.offerings.weightgain = gymdata.data.offerings.weightgain, _this.offerings.pregnancy = gymdata.data.offerings.pregnancy;
                    }, function (error) { return console.log(error); }, function () { return console.log("finished fetching from api", _this.gymdata["name"] + "" + _this.infrastructure["steamRoom"] + "    " + _this.steamRoom); });
                };
                Gymview = __decorate([
                    core_1.Component({
                        selector: 'pm-gymview',
                        templateUrl: 'app/gym/gymview.component.html',
                        styleUrls: ['app/gym/gymview.component.css'],
                        providers: [gymdetail_service_1.GymDetailService, http_1.HTTP_PROVIDERS, http_1.JSONP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [gymdetail_service_1.GymDetailService])
                ], Gymview);
                return Gymview;
            }());
            exports_1("Gymview", Gymview);
        }
    }
});
//# sourceMappingURL=gymview.component.js.map