import { Component} from '@angular/core';
import { Product } from './product-types';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  addToCart:number = 0
 product : Product[] = [{
  pImage:"../../favicon.ico",
  name:"angular",
  price:999,
  color: "pink",
  discount:9,
  inStock: 10
},{
  pImage:"../../favicon.ico",
  name:"angular1",
  price:9939,
  color: "pink",
  discount:2,
  inStock: 120
},{
  pImage:"../../favicon.ico",
  name:"angular2",
  price:99,
  color: "black",
  discount:9,
  inStock: 40
}]
getDiscountedPrice(item:Product){
  return item.price - item.discount
}
decreamentCartValue(){
  if (this.addToCart > 0) {
    this.addToCart --
  }
 
}
increamentCartValue(item:Product){
  if(item.inStock > this.addToCart){
    this.addToCart++
  }

}
}
