import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './about/about.component';
import {EventsComponent} from './events/events.component';
import {BusnissWomenComponent} from './busniss-women/busniss-women.component';
import {ContactComponent} from './contact/contact.component';
import {HomeComponent} from './home/home.component';
import {LogInComponent} from './auth/log-in/log-in.component';
import {SignComponent} from './auth/sign/sign.component';
 const appRoutes: Routes = [
   { path: '',redirectTo:'/home', pathMatch: 'full'},
   { path: 'about', component: AboutComponent},
   { path: 'home', component: HomeComponent},
   { path: 'events', component: EventsComponent},
   { path: 'busnissWomen', component: BusnissWomenComponent},
   { path: 'contact', component: ContactComponent},
   { path: 'login', component: LogInComponent},
   { path: 'signup', component: SignComponent}
 ];

 @NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports:[RouterModule]
 })
export class AppRoutingModule {

}
