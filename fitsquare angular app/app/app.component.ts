import { Component } from 'angular2/core';
import { Footer} from './footer/footer.component';
import { Aboutus} from './aboutus/aboutus.component';
import {Navbar} from './navbar/navbar.component';
import {Careers} from './careers/careers.component';
import {WelcomeComponent} from './home/welcome.component';
import {Dialog} from './dialog/dialog.component';
import {Gymview} from './gym/gymview.component';

import 'rxjs/Rx';
import { ROUTER_PROVIDERS, RouteConfig,  RouterOutlet, RouterLink } from 'angular2/router';
import { HTTP_PROVIDERS} from 'angular2/http';



@Component({

    selector : 'pm-app',
    template: `
        <div>
            <pm-navbar> </pm-navbar>
            <router-outlet></router-outlet>
        
            <pm-footer></pm-footer>
        </div>
    
        
        `,
    styleUrls:['app/aboutus/production.min.css'],
    directives:[Footer,Aboutus, Navbar,WelcomeComponent,Careers,Dialog,Gymview, RouterOutlet, RouterLink],
    providers:[ROUTER_PROVIDERS, HTTP_PROVIDERS]

})

@RouteConfig([
    { path: '/aboutus', name:'Aboutus11', component:Aboutus},
    { path: '/careers', name:'Careers', component:Careers},
    { path: '/gym', name:'Gymview', component:Gymview},
    { path: '/*other', name:'Other', redirectTo: ['WelcomeComponent'] },

    {path:'/', name:'WelcomeComponent', component: WelcomeComponent, useAsDefault:true}


])


export class AppComponent{

    pageTitle: string = 'FitSquare';
}