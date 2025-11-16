import { Component } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  ProductData:{
    id: number;
    name: string;
    brand: string;
    price: number;
    rating: number;
    image: string;
}[] = [];
constructor(private productService:ProductService){

}
getProductData(){
  this.ProductData=this.productService.getProductData();
  console.log(this.ProductData);
  
}
}
