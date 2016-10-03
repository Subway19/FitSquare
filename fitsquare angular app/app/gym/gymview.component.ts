import { Component, OnInit } from 'angular2/core';
import { GymDetailService } from './gymdetail.service';

import { HTTP_PROVIDERS, JSONP_PROVIDERS, Jsonp, HTTP_BINDINGS } from 'angular2/http';




@Component({

    selector: 'pm-gymview',
    templateUrl: 'app/gym/gymview.component.html',
    styleUrls: ['app/gym/gymview.component.css'],
    providers: [GymDetailService, HTTP_PROVIDERS, JSONP_PROVIDERS]

})
export class Gymview implements OnInit {
    //this is a replica of view.ejs

    gymdata = {
        status: Boolean,
        name: String,
        about: String,
        locality: String,
        address: String,
        timings: String

    }

    public infrastructure = {
        steamRoom: Boolean,
        lounge: Boolean,
        petFriendly: Boolean,
        shower: Boolean,
        locker: Boolean,
        canteen: Boolean,
        swimming: Boolean
    }

    public offerings = {

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

    }

    //extra redundant code for setting li's active and inactive
    steamRoom: {} = this.infrastructure.steamRoom;
    lounge: {} = this.infrastructure.lounge;
    petFriendly: {} = this.infrastructure.petFriendly;
    shower: {} = this.infrastructure.shower;
    locker: {} = this.infrastructure.locker;
    canteen: {} = this.infrastructure.canteen;
    swimming: {} = this.infrastructure.swimming;


    athleticClub: {} = this.offerings.athleticClub;
    certifiedTrainers: {} = this.offerings.certifiedTrainers;
    strengthening: {} = this.offerings.strengthening;
    punchBags: {} = this.offerings.punchBags;
    personalTrainer: {} = this.offerings.personalTrainer;
    stretching: {} = this.offerings.stretching;
    circuitTraining: {} = this.offerings.circuitTraining;
   
   groupClasses: {} = this.offerings.groupClasses;
   boxingRings: {} = this.offerings.boxingRings;
   bodyBuilding: {} = this.offerings.bodyBuilding;
   weightLose: {} = this.offerings.weightLose;
    weightgain: {} = this.offerings.weightgain;
     pregnancy: {} = this.offerings.pregnancy;

 

    constructor(private _gymdetailservice: GymDetailService) {

    }

    ngOnInit() {
        this._gymdetailservice.getGymDetail()
            .subscribe(gymdata => {
                this.gymdata.status = gymdata.status, this.gymdata.name = gymdata.data.name, this.gymdata.about = gymdata.data.about
                this.gymdata.locality = gymdata.data.locality, this.gymdata.address = gymdata.data.address, this.gymdata.timings = gymdata.data.timings,
                    this.infrastructure.steamRoom = gymdata.data.infrastructure.steamRoom, this.infrastructure.lounge = gymdata.data.infrastructure.lounge, this.infrastructure.petFriendly = gymdata.data.infrastructure.petFriendly,
                    this.infrastructure.shower = gymdata.data.infrastructure.shower, this.infrastructure.locker = gymdata.data.infrastructure.locker, this.infrastructure.canteen = gymdata.data.infrastructure.canteen, this.infrastructure.swimming = gymdata.data.infrastructure.swimming,



                    this.offerings.athleticClub = gymdata.data.offerings.athleticClub, this.offerings.certifiedTrainers = gymdata.data.offerings.certifiedTrainers, this.offerings.strengthening = gymdata.data.offerings.strengthening, this.offerings.punchBags = gymdata.data.offerings.punchBags,
                    this.offerings.personalTrainer = gymdata.data.offerings.personalTrainer, this.offerings.stretching = gymdata.data.offerings.stretching, this.offerings.circuitTraining = gymdata.data.offerings.circuitTraining, this.offerings.groupClasses = gymdata.data.offerings.groupClasses,
                    this.offerings.boxingRings = gymdata.data.offerings.boxingRings, this.offerings.bodyBuilding = gymdata.data.offerings.bodyBuilding, this.offerings.weightLose = gymdata.data.offerings.weightLose,
                    this.offerings.weightgain = gymdata.data.offerings.weightgain, this.offerings.pregnancy = gymdata.data.offerings.pregnancy

            },
            error => console.log(error),
            () => console.log("finished fetching from api", this.gymdata["name"] + "" + this.infrastructure["steamRoom"] + "    " + this.steamRoom)
            );

    }

}



