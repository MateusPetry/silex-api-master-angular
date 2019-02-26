import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { MeucomponentComponent } from './meucomponent/meucomponent.component';
import { MeumoduleModule } from './meucomponent/meumodule/meumodule.module';

import { HttpService } from './http.service'
import { HttpClientModule } from '@angular/common/http';
import { EventsComponent } from './events/events.component';
import { EventsSingleComponent } from './events/events-single/events-single.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { StorageService } from './storage.service';
import { MakeSubscriptionComponent } from './make-subscription/make-subscription.component';
import { ConfirmComponent } from './make-subscription/confirm/confirm.component';
import { PainelComponent } from './painel/painel.component';
import { UserEventsComponent } from './painel/user-events/user-events.component';
import { AuthGuard } from './guard/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    MeucomponentComponent,
    EventsComponent,
    EventsSingleComponent,
    SignupComponent,
    LoginComponent,
    MakeSubscriptionComponent,
    ConfirmComponent,
    PainelComponent,
    UserEventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MeumoduleModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService, StorageService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
