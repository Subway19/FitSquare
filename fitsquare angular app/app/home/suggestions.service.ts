import { Http, Response, HTTP_PROVIDERS, Headers, RequestOptions, HTTP_BINDINGS } from 'angular2/http';
import {Observable} from 'rxjs/Rx';
import {Injectable} from 'angular2/core';



import 'rxjs/Rx';
import 'rxjs/add/operator/map';



@Injectable()





export class SuggestionsService{
    private _url = "http://23.97.57.90/v1/gym/search/";

    constructor(private _http : Http){

    }    

     getSuggestions(search = ""){

         console.log(`Searching for ${search}`);
         var headers  = new Headers({
            "Access-Control-Allow-Origin" : "http://23.97.57.90/",
            "Access-Control-Allow-Methods": "GET, POST, PUT",
            "Access-Control-Allow-Headers": "Content-Type"

        });

        var options = new RequestOptions({
            headers : headers
        });


         return this._http.get(this._url + search , options)
                    .map(res => res.json());
    
            
     }

}