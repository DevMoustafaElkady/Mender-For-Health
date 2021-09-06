import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './Views/about/about.component';
import { ContactUsComponent } from './Views/contact-us/contact-us.component';
import { SpecialatisComponent } from './Views/specialatis/specialatis.component';
import { HomeComponent } from './Views/home/home.component';
import { RegisterComponent } from './Views/register/register.component';
import { LoginComponent } from './views/login/login.component';
import { DoctorsComponent } from './views/doctors/doctors.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SearchfilterPipe } from './views/searchfilter.pipe';




@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactUsComponent,
    SpecialatisComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    DoctorsComponent,
    SearchfilterPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
