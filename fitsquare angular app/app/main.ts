import Raven from 'raven-js';
import { bootstrap } from 'angular2/platform/browser';

// Our main component
import { AppComponent } from './app.component';
import { provide, ExceptionHandler } from 'angular2/core';
import { Http, HTTP_PROVIDERS, JSONP_PROVIDERS, HTTP_BINDINGS } from 'angular2/http';
import { ROUTER_PROVIDERS} from 'angular2/router';


Raven
  .config('https://77e258c1f22d4b6fa743c9491038cf79@app.getsentry.com/85183')
  .install();

class RavenExceptionHandler {
  call(err:any) {
    Raven.captureException(err.originalException);
  }
}


bootstrap(AppComponent, [HTTP_PROVIDERS, ROUTER_PROVIDERS,JSONP_PROVIDERS,HTTP_BINDINGS,
  provide(ExceptionHandler, {useClass: RavenExceptionHandler})
]).catch(err => console.error(err));