import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-transaction-modal',
  templateUrl: './transaction-modal.component.html',
  styles: [`.transaction-container {
    position: fixed;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70%;
    height: 30vh;
    background: white;
    text-align: center;
    -webkit-box-shadow: 3px 3px 5px 6px #ccc;
    -moz-box-shadow: 3px 3px 5px 6px #ccc;
    box-shadow: 3px 3px 5px 6px #ccc;
}`]
})
export class TransactionModalComponent implements OnInit {
  @Input() checkout:number;

  constructor() { }

  ngOnInit() {
  }

}
