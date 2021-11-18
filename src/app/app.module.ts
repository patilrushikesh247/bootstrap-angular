import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
@NgModule({
  declarations: [
    AppComponent,
    BootstrapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoadingBarRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
