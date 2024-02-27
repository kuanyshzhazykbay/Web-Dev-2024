import { Component, Input, OnInit } from '@angular/core';
import { ItemList } from '../itemList';
import {
  CommonModule
} from "@angular/common";
import { ProductListComponent } from '../product-list/product-list.component';


@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit {
  @Input() itemList!: ItemList;


  //itemList : ItemList = new ItemList(this.items);
  constructor() { }

  ngOnInit(): void {

  }

}
