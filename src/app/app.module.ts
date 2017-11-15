import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import * as Pages from './pages/core';

const appRoutes: Routes = [
  { path: '', component: Pages.ComingSoonTravellerComponent },
  {path: 'business', component: Pages.ComingSoonCompanyComponent}
];

@NgModule({
  declarations: [
    AppComponent,

    Pages.ComingSoonTravellerComponent,
    Pages.ComingSoonCompanyComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
