import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category.model';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  categoryList: Category[];
  productForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.productForm = this.fb.group({
      productName: [null, [Validators.required]],
      price : [null, [Validators.required]],
      category: ['', [Validators.required]],
      imageUrl: [null, [Validators.required]]
    });
    this.categoryList = [{id: 1, categoryName: 'Fruit', isdelete: 0},
                         {id: 2, categoryName: 'Vegitable', isdelete: 0},
                         {id: 3, categoryName: 'Bread', isdelete: 0}];
  }
  SubmitForm() {
    console.log(this.productForm);
  }
}
