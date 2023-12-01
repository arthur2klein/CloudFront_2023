import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { GestionProfilsComponent } from './pages/gestion-profils/gestion-profils.component';
import { ParametresComponent } from './pages/parametres/parametres.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { AdminComponent } from './admin/admin.component';
import { MenuAdminComponent } from './pages/menu-admin/menu-admin.component';


@NgModule({
  declarations: [
    GestionProfilsComponent,
    ParametresComponent,
    AccueilComponent,
    AdminComponent,
    MenuAdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
