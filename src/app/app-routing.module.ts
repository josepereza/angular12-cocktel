import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CocktelDetailComponent } from './components/cocktel-detail/cocktel-detail.component';
import { ListadoCategoriaComponent } from './components/listado-categoria/listado-categoria.component';
import { ListadoComponent } from './components/listado/listado.component';

const routes: Routes = [
  {path:'listado',component:ListadoComponent},
  {path:'listadoCategoria/:categoria', component:ListadoCategoriaComponent},
  {path:'detalle/:id', component:CocktelDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
