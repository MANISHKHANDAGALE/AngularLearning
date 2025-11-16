import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() {
    console.log("product services");
   }
   getProductData() {
  return [
    {
      id: 1,
      name: "iPhone 15",
      brand: "Apple",
      price: 99999,
      rating: 4.8,
      image: "assets/phones/iphone15.jpg"
    },
    {
      id: 2,
      name: "Samsung Galaxy S24",
      brand: "Samsung",
      price: 84999,
      rating: 4.7,
      image: "assets/phones/galaxy-s24.jpg"
    },
    {
      id: 3,
      name: "OnePlus 12",
      brand: "OnePlus",
      price: 65999,
      rating: 4.6,
      image: "assets/phones/oneplus12.jpg"
    },
    {
      id: 4,
      name: "Google Pixel 8",
      brand: "Google",
      price: 69999,
      rating: 4.7,
      image: "assets/phones/pixel8.jpg"
    },
    {
      id: 5,
      name: "Xiaomi 14 Pro",
      brand: "Xiaomi",
      price: 49999,
      rating: 4.5,
      image: "assets/phones/xiaomi14.jpg"
    },
    {
      id: 6,
      name: "Vivo X100",
      brand: "Vivo",
      price: 45999,
      rating: 4.4,
      image: "assets/phones/vivox100.jpg"
    },
    {
      id: 7,
      name: "Oppo Find X7",
      brand: "OPPO",
      price: 48999,
      rating: 4.3,
      image: "assets/phones/oppox7.jpg"
    },
    {
      id: 8,
      name: "Realme GT 6",
      brand: "Realme",
      price: 32999,
      rating: 4.2,
      image: "assets/phones/realme-gt6.jpg"
    },
    {
      id: 9,
      name: "Nothing Phone 2",
      brand: "Nothing",
      price: 39999,
      rating: 4.4,
      image: "assets/phones/nothing2.jpg"
    },
    {
      id: 10,
      name: "Motorola Edge 40",
      brand: "Motorola",
      price: 29999,
      rating: 4.1,
      image: "assets/phones/moto40.jpg"
    }
  ];
}

}
