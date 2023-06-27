import { Component } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { producto } from 'src/app/models/producto';

@Component({
  selector: 'app-productos-lista',
  templateUrl: './productos-lista.component.html',
  styleUrls: ['./productos-lista.component.css']
})

export class ProductosListaComponent {

  productos: any = [];

  constructor(private productosService: ProductosService){}

  ngOnInit(){
    this.getProductos();
  }

  getProductos(){
    this.productosService.getProductos().subscribe(
      res => {
        this.productos = res
      },
      err => console.log(err)
    );
  }

  eliminarProducto(id:string){
      this.productosService.deleteProducto(id)
        .subscribe(
          res =>{
            console.log(res)
            this.getProductos();
          },
          err => {
            console.log(err)
            this.getProductos();}
        )
  }

  editarProducto(id: string){
    console.log(id)
  }
}
