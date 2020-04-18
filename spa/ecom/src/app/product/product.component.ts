import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  categoryList: Category[];

  constructor() { }

  ngOnInit() {
    this.categoryList = [{id: 1, categoryName: 'Fruit', isdelete: 0},
                         {id: 2, categoryName: 'Vegitable', isdelete: 0},
                         {id: 3, categoryName: 'Bread', isdelete: 0}];
  }

}
