import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MilleFeuillePage } from './mille_feuille.page';

const routes: Routes = [
  {
    path: '',
    component: MilleFeuillePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MilleFeuillePage]
})
export class MilleFeuillePageModule {}
