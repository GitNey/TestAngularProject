import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { SearchFlightsComponent } from './search-flights/search-flights.component';
import { HomeComponent } from './home/home.component';
//import { CounterComponent } from './counter/counter.component';
//import { FetchDataComponent } from './fetch-data/fetch-data.component';
//import { MyComponent } from './my-component/my-component.component';

/**
 * @NgModule decorator:
 * There are several fields that can be used to configure and customize
 * the behavior of a module. The fields in this decorator provide control over
 * services, components and other features used in this decorator.
 */
@NgModule({
  /**
   * declarations
   * Used to declare components, directives and pipes that belong to the module.
   * These declarations make items available for use within the module.
   */
  declarations: [
    AppComponent,
    NavMenuComponent,
    SearchFlightsComponent,
    HomeComponent,
    //CounterComponent,
    //FetchDataComponent,
    //MyComponent,
  ],
  /**
   * imports
   * Specifies other modules who's exported components, directives, or services
   * are required by components in this module.
   */
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    /**
     * Route definitions for our Angular Client App.
     */
    RouterModule.forRoot([
      { path: '', component: SearchFlightsComponent, pathMatch: 'full' },
      { path: 'notes', component: HomeComponent },
      //{ path: 'counter', component: CounterComponent },
      //{ path: 'fetch-data', component: FetchDataComponent },
      // my newly added route, it maps to component: MyComponent
      //{ path: 'my-component', component: MyComponent }
    ])
  ],
  /**
   * providers
   * Used to configure the dependency injection system with a list of services
   * that the module should provide. These services are made available throughout
   * the application.
   */
  providers: [],
  /**
   * bootstrap
   * Field is used to specify the root components that should be bootstrapped when
   * the module is loaded. The root component typically corresponds to the main
   * component of the application.
   */
  bootstrap: [AppComponent]
})
export class AppModule { }

