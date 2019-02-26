import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { MeucomponentComponent } from './../meucomponent/meucomponent.component';
import { EventsComponent } from '../events/events.component';
import { EventsSingleComponent } from '../events/events-single/events-single.component';
import { SignupComponent } from '../signup/signup.component';
import { LoginComponent } from '../login/login.component';
import { MakeSubscriptionComponent } from '../make-subscription/make-subscription.component';
import { ConfirmComponent } from '../make-subscription/confirm/confirm.component';
import { PainelComponent } from '../painel/painel.component';
import { UserEventsComponent } from '../painel/user-events/user-events.component';
import { AuthGuard } from '../guard/auth.guard';

const appRoutes: Routes = [
  {path: 'home', component: MeucomponentComponent},
  {path: 'event', component: EventsComponent},
  {path: 'event/:slug', component: EventsSingleComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'make-subscription', component: MakeSubscriptionComponent},
  {path: 'make-subscription/confirm', component: ConfirmComponent},
  {path: 'painel', component: PainelComponent, children:[
    {path: 'events', component:UserEventsComponent}
  ],
  canActivate: [AuthGuard]
}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
