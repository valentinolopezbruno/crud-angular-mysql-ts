import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})

export class ProductosService {

  API_URL = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  getProductos(){
    return this.http.get(`${this.API_URL}`)
  }

  getProducto(id: string){
    return this.http.get(`${this.API_URL}/${id}`)
  }

  agregarProducto(producto: producto){
    return this.http.post(`${this.API_URL}`, producto)
  }

  deleteProducto(id: string){
    return this.http.delete(`${this.API_URL}/${id}`)
  }

  editarProducto(id: any, producto: producto){
    return this.http.put(`${this.API_URL}/${id}`, producto)
  }
}
