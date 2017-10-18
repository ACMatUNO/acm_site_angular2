import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AboutComponent} from "./about-component/about.component";
import {RouterModule} from "@angular/router";
import {IndexComponent} from "./index-component/index.component";
import {CalendarComponent} from "./calendar-component/calendar.component";
import {NavbarComponent} from "./navbar-component/navbar.component";
import {ContactComponent} from "./contact-component/contact.component";
import {SpgrpComponent} from "./spgrp-component/spgrp.component";
import {LoginPageComponent} from "./loginpage-component/loginPage.component";
import {EventComponent} from "./event-component/event.component";

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    IndexComponent,
    CalendarComponent,
    NavbarComponent,
    ContactComponent,
    SpgrpComponent,
    LoginPageComponent,
    EventComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        component: IndexComponent
      },
      {
        path : 'about',
        component: AboutComponent
      },
      {
        path : 'calendar',
        component : CalendarComponent
      },
      {
        path: 'contact',
        component : ContactComponent
      },
      {
        path: 'spgrp',
        component : SpgrpComponent
      },
      {
        path: 'login',
        component: LoginPageComponent
      },

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
