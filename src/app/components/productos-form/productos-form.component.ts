import { Component , HostBinding} from '@angular/core';
import { producto } from 'src/app/models/producto';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { Router } from '@angular/router';
import { Params } from '@angular/router';
@Component({
  selector: 'app-productos-form',
  templateUrl: './productos-form.component.html',
  styleUrls: ['./productos-form.component.css']
})
export class ProductosFormComponent {

  @HostBinding('class') classes = 'row'

  // Esta variable la creo para saber si estoy queriendo editar o agregar un producto.
  edit: boolean = false;

  producto: producto = {
    nombre:'',
    precio:0,
    imagen:'',
    craeted_at: new Date()
  };

  constructor(private productoService: ProductosService, private route: Router, private activatedRoute: ActivatedRoute){

  }

  agregarProducto(){
    this.productoService.agregarProducto(this.producto)
      .subscribe(
        res => {
          console.log(res)
          this.route.navigate(['/productos'])
        },
        err => {
          console.log(err)
          this.route.navigate(['/productos'])
        }

      )
  }

  editarProducto(){
    this.productoService.editarProducto(this.producto.id, this.producto)
      .subscribe(
        res => {console.log(res)},
        err => console.log(err)
      )
  }

  ngOnInit(){
    // Esto me trae los parametros que le estoy pasando por la URL, que es el ID del producto que quiero actualizar.
    // Es una validacion para guiarme si estoy queriendo actualizar o crear un producto.
    const params: Params = this.activatedRoute.snapshot.params;

    if (params){
      this.productoService.getProducto(params['id'])
        .subscribe(
          res => {
            console.log(res);
            this.producto = res;
            this.edit = true;
          },
          err => {
            console.log(err)
          
          }
        )
    }
  }
}
