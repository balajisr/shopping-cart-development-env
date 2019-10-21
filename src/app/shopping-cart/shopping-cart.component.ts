import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  totalQty:number = 0;
  totalAmount:number = 0;
  amount:number = 0;
  checkout:boolean = false;
  @Output() addQty = new EventEmitter<{sendData: number}>()
  @Output() subQty = new EventEmitter<{sendData: number}>()

  addedQty(itemPlus: {productPrice: number}) {
    this.totalQty += 1;
    this.totalAmount += itemPlus.productPrice;
  }

  subtractQty(itemMinus: {productPrice: number}) {
    this.totalQty -= 1;
    this.totalAmount -= itemMinus.productPrice;
  }

  isCheckout() {
    if(this.totalQty === 0) {
      return true;
    } else {
      return false;
    }
  }

  showCheckout() {
    if(this.totalQty > 0) {
      this.amount = this.totalAmount;
      return this.checkout = true;
    }
  }

  productItems:Object;
  constructor(private data:DataService) {
  }

  ngOnInit() {
    this.data.getData().then((response) => {
      response.json().then((data) => {
        this.productItems = data;
      })
    }).catch((err) => {
      console.log(err);
    });
  }

}