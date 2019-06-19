import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header.component';
import { FooterComponent } from './shared/footer.component';
import { LoginComponent } from './shared/login.component';
import { AboutusComponent } from './shared/aboutus.component';
import { SignupComponent } from './shared/signup.component';
import { HostSearchComponent } from './host/host-search.component';
import { HostResultComponent } from './host/host-result.component';
import { RegisterResultComponent } from './register/register-result.component';
import { GuestResultComponent } from './guest/guest-result.component';
import { GuestSearchComponent } from './guest/guest-search.component';
import { HostAddComponent } from './host/host-add.component';
import { HostEditComponent } from './host/host-edit.component';
import { GuestAddComponent } from './guest/guest-add.component';
import { GuestEditComponent } from './guest/guest-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    AboutusComponent,
    SignupComponent,
    HostSearchComponent,
    HostResultComponent,
    RegisterResultComponent,
    GuestResultComponent,
    GuestSearchComponent,
    HostAddComponent,
    HostEditComponent,
    GuestAddComponent,
    GuestEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
