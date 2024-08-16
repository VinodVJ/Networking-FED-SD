import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutCmpComponent } from './features/about-cmp/about-cmp.component';
import { HomePageComponent } from './features/home-page/home-page.component';
import { SearchWidgetComponent } from './features/search-widget/search-widget.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'about', component: AboutCmpComponent},
  {path: 'search', component: SearchWidgetComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
