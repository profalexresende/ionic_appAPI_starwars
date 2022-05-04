import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilmeDetalhePage } from './filme-detalhe.page';

const routes: Routes = [
  {
    path: '',
    component: FilmeDetalhePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilmeDetalhePageRoutingModule {}
