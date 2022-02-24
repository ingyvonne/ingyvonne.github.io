import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { ComponentsModule } from '../components.module';
import { MatToolbarModule } from '@angular/material/toolbar'; 



@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    ComponentsModule
  ],
  exports:[
    NavbarComponent
  ]
})
export class NavbarModule { }
