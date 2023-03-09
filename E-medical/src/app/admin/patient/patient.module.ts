import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { PIndexComponent } from './p-index/p-index.component';
import { PAddComponent } from './p-add/p-add.component';
import { PDeleteComponent } from './p-delete/p-delete.component';


@NgModule({
  declarations: [
    PIndexComponent,
    PAddComponent,
    PDeleteComponent
  ],
  imports: [
    CommonModule,
    PatientRoutingModule
  ]
})
export class PatientModule { }
