import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http"
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegationComponent } from './components/navegation/navegation.component';
import { ProductosFormComponent } from './components/productos-form/productos-form.component';
import { ProductosListaComponent } from './components/productos-lista/productos-lista.component';
import { ProductosService } from './services/productos.service';

@NgModule({
  declarations: [
    AppComponent,
    NavegationComponent,
    ProductosFormComponent,
    ProductosListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ProductosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
