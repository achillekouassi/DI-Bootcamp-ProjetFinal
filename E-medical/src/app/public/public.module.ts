import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HopitauxComponent } from './hopitaux/hopitaux.component';
import { RdvComponent } from './rdv/rdv.component';
import { MedecinComponent } from './medecin/medecin.component';
import { HoraireComponent } from './horaire/horaire.component';
import { SpecialiteComponent } from './specialite/specialite.component';
import { PublicRoutingModule } from './public-routing.module';
import { PublicLayoutComponent } from './public-layout/public-layout.component';
import { PublicHeaderComponent } from './public-header/public-header.component';



@NgModule({
  declarations: [
    HomeComponent,
    HopitauxComponent,
    RdvComponent,
    MedecinComponent,
    HoraireComponent,
    SpecialiteComponent,
    PublicLayoutComponent,
    PublicHeaderComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
