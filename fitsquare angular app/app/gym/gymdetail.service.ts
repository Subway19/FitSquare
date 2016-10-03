import { Http, Response, HTTP_PROVIDERS, JSONP_PROVIDERS, Jsonp, Headers, RequestOptions, HTTP_BINDINGS } from 'angular2/http';
import {Observable} from 'rxjs/Rx';
import {Injectable} from 'angular2/core';


import 'rxjs/Rx';
import 'rxjs/add/operator/map';



@Injectable()





export class GymDetailService{
    private _url = "http://23.97.57.90/v1/gym/detail/57484afbe3e07ac60d4a273a";

    constructor(private _http : Http){

    }

    

   
    

     getGymDetail(){
         var headers  = new Headers({
            "Access-Control-Allow-Origin" : "http://23.97.57.90/",
            "Access-Control-Allow-Methods": "GET, POST, PUT",
            "Access-Control-Allow-Headers": "Content-Type"

        });

        var options = new RequestOptions({
            headers : headers
        });


         return this._http.get(this._url, options)
                    .map(res => res.json());
    
            
     }

}