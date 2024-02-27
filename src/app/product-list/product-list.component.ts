import { Component, Input, OnInit, Output } from '@angular/core';
import { Item } from '../item';
import {
  CommonModule
} from "@angular/common";
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule,ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  @Input() items: Item[] = [];


  constructor() { }

  ngOnInit(): void {

  }

  onTaskRemove(index:number){
    this.items.splice(index,1)
  }

}