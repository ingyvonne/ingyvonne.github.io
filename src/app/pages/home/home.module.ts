import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PagesModule } from '../pages.module';
import { NavbarModule } from 'src/app/components/navbar/navbar.module';
import { HorizontalCardModule } from 'src/app/components/horizontal-card/horizontal-card.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    PagesModule,
    NavbarModule,
    HorizontalCardModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
