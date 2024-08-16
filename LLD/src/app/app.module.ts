import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderCmpComponent } from './features/header-cmp/header-cmp.component';
import { NavbarCmpComponent } from './features/navbar-cmp/navbar-cmp.component';
import { AboutCmpComponent } from './features/about-cmp/about-cmp.component';
import { SearchWidgetComponent } from './features/search-widget/search-widget.component';
import { HomePageComponent } from './features/home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderCmpComponent,
    NavbarCmpComponent,
    AboutCmpComponent,
    SearchWidgetComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
