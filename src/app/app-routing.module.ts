import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosFormComponent } from './components/productos-form/productos-form.component';
import { ProductosListaComponent } from './components/productos-lista/productos-lista.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: '/productos',
    pathMatch: 'full'
  },
  {
    path:'productos',
    component: ProductosListaComponent
  },
  {
    path: 'agregarProducto',
    component: ProductosFormComponent
  },
  {
    path: 'editarProducto/:id',
    component:ProductosFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
