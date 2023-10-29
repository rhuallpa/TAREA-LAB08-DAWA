import { Component } from '@angular/core';
import { Producto } from './models/producto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appHuallpa';

  productoArray: Producto[]=[
    {codigo:1, descripcion: "MacBook Pro", precio: 5800},
    {codigo:2, descripcion: "Laptop Lenovo", precio: 4700},
    {codigo:3, descripcion: "Samsung Galaxy ", precio: 2500},
    {codigo:4, descripcion: "iPhone", precio: 5500}
  ];

  selectedProducto: Producto= new Producto();

  openForEdit(producto:Producto){
    this.selectedProducto=producto;
  }
  addOrEdit(){

    if (this.selectedProducto.codigo===0){
      this.selectedProducto.codigo= this.productoArray.length+1;
      this.productoArray.push(this.selectedProducto);
    }
    this.selectedProducto= new Producto();
  }

  delete(){
    if(confirm('Estas seguro de querer eliminar el producto selecionado?')){
      this.productoArray= this.productoArray.filter(x => x != this.selectedProducto);
      this.selectedProducto= new Producto();
    }
  }
}


