import { Component } from 'angular2/core';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({

    selector: 'pm-careers',
    templateUrl: 'app/careers/careers.component.html',
     styleUrls:['app/careers/careers.component.css', 'app/aboutus/production.min.css'],
     directives:[ROUTER_DIRECTIVES],
    providers:[ROUTER_PROVIDERS]
})
export class Careers {

    
}