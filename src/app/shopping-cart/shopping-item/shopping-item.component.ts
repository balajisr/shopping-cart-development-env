import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.css']
})
export class ShoppingItemComponent implements OnInit {
  @Input() product: {
    productName: string,
    brandName: string,
    quantity: string,
    price: number,
    mrp: number,
    imageUrl: string,
    offerTxt: string
  };
  @Output() dataAdded = new EventEmitter<{productPrice: number}>();
  @Output() dataSub = new EventEmitter<{productPrice: number}>();

  itemQty:number = 0;

  btnEnable() {
    if(this.itemQty < 1) {
      return true;
    } else {
      return false
    }
  }

  decreaseQty() {
    this.itemQty -= 1;
    this.dataSub.emit({productPrice: this.product.price});
  }

  increaseQty() {
    this.itemQty += 1;
    this.dataAdded.emit({productPrice: this.product.price});
  }

  constructor() {
  }

  ngOnInit() {
  }

}
