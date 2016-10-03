import { Component } from 'angular2/core';
import { Aboutus} from '../aboutus/aboutus.component';
import {WelcomeComponent} from '../home/welcome.component';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({

    selector: 'pm-footer',
    templateUrl: 'app/footer/footer.component.html',
     styleUrls:['app/footer/footer.component.css'],
     directives:[ ROUTER_DIRECTIVES],
    providers:[ROUTER_PROVIDERS]
})



export class Footer {

}