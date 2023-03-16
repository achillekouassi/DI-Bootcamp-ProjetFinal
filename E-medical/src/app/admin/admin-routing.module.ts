import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: AdminLayoutComponent, children:[
    { path: '', redirectTo: 'dashboard', pathMatch:'full'},
    { path: 'dashboard', component: DashboardComponent},
    {
      path: 'hopital', loadChildren: () => import('./hopital/hopital.module')
      .then(m => m.HopitalModule)
    },

    {
      path: 'specialite', loadChildren: () => import('./specialite/specialite.module')
      .then(m => m.SpecialiteModule)
    },

    {
      path: 'medecin', loadChildren: () => import('./medecin/medecin.module')
      .then(m => m.MedecinModule)
    },

    {
      path: 'horaire', loadChildren: () => import('./horaire/horaire.module')
      .then(m => m.HoraireModule)
    },

    {
      path: 'patient', loadChildren: () => import('./patient/patient.module')
      .then(m => m.PatientModule)
    },
  ]
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
