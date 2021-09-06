import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SidenavComponent } from './sidenav/sidenav.component';
import {MatDividerModule} from '@angular/material/divider';
import { FooterComponent } from './footer/footer.component';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';







const materialComponents = [
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatInputModule,
  MatSidenavModule,
  MatDividerModule,
  MatListModule,
  MatFormFieldModule,
  MatCheckboxModule,
  MatRadioModule,
  MatDatepickerModule,
];



@NgModule({
  declarations: [
    NavbarComponent,
    SidenavComponent,
    FooterComponent,

  ],
  imports: [
    CommonModule,
    materialComponents,
    RouterModule,
  ], exports: [
    NavbarComponent,
    SidenavComponent,    
    FooterComponent,
    materialComponents
  ]
})
export class SharedModule { }
