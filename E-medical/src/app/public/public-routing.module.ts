import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MedecinComponent } from './medecin/medecin.component';
import { RdvComponent } from './rdv/rdv.component';
import { HopitauxComponent } from './hopitaux/hopitaux.component';
import { SpecialiteComponent } from './specialite/specialite.component';
import { HoraireComponent } from './horaire/horaire.component';
import { PublicLayoutComponent } from './public-layout/public-layout.component';

const routes: Routes = [
{
  path: '', component: PublicLayoutComponent, children: [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    { path: 'medecin', component: MedecinComponent },
    { path: 'rdv', component: RdvComponent },
    { path: 'hopitaux', component: HopitauxComponent },
    { path: 'sepecilite', component: SpecialiteComponent },
    { path: 'horaire', component: HoraireComponent },
  ]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
