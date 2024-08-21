import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { count } from 'rxjs';
import { countReducer } from './counter/state/counter.reducer'; 

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideStore(),provideState({
    name:"count",
    reducer: countReducer
  })]
};
