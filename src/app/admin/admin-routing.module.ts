import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { GestionProfilsComponent } from './pages/gestion-profils/gestion-profils.component';
import { ParametresComponent } from './pages/parametres/parametres.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
	{
		path: '', component: AdminComponent, children: [
			{path: '', component: AccueilComponent},
			{path: 'profils', component: GestionProfilsComponent},
			{path: 'parametres', component: ParametresComponent},
		]
	},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
