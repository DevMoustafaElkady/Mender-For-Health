import { DoctorsComponent } from './Views/doctors/doctors.component';
import { LoginComponent } from './Views/login/login.component';
import { RegisterComponent } from './Views/register/register.component';
import { HomeComponent } from './Views/home/home.component';
import { ContactUsComponent } from './Views/contact-us/contact-us.component';
import { SpecialatisComponent } from './Views/specialatis/specialatis.component';
import { AboutComponent } from './Views/about/about.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
},
{
    path: 'spec',
    component: SpecialatisComponent
},
{
    path: 'doctors',
    component: DoctorsComponent
},
{
    path: 'contact',
    component: ContactUsComponent
},
{
    path: 'regist',
    component: RegisterComponent
},
{
    path: 'login',
    component: LoginComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
