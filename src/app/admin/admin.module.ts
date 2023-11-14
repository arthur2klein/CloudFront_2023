import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { GestionProfilsComponent } from './pages/gestion-profils/gestion-profils.component';
import { ParametresComponent } from './pages/parametres/parametres.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { AdminComponent } from './admin/admin.component';


@NgModule({
  declarations: [
    GestionProfilsComponent,
    ParametresComponent,
    AccueilComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
