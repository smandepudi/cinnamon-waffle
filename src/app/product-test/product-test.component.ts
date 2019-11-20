import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Product } from '../models/product';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-product-test',
  templateUrl: './product-test.component.html',
  styleUrls: ['./product-test.component.scss'],
  providers: [DatePipe]
})
export class ProductTestComponent implements OnInit {

  activeProduct: Product;
  test = true;
  currentDate: Date = undefined;
  allProducts: Product[] = [
    new Product(1, 'Product 001'),
    new Product(2, 'Product 002'),
    new Product(3, 'Product 003'),
    new Product(4, 'Product 004')
  ];



  constructor(private route: ActivatedRoute, private datePipe: DatePipe) { }

  ngOnInit() {
    // this.currentDate = this.datePipe.transform(new Date(), 'dd-MM-yyyy');
    this.currentDate = new Date(); // April 15, 1988
  }

}
