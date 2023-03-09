import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PIndexComponent } from './p-index/p-index.component';
import { PAddComponent } from './p-add/p-add.component';
import { PDeleteComponent } from './p-delete/p-delete.component';

const routes: Routes = [
  { path: '', component: PIndexComponent},
  { path: 'add', component: PAddComponent},
  { path: 'delete/id', component: PDeleteComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
