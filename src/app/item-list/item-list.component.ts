import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.css',
})
export class ItemListComponent implements OnInit {
  private url: string = 'https://fakestoreapi.com/products';
  
  data: any;

  isLoading: boolean = true;

  ngOnInit(): void {
    fetch(this.url)
    .then((res) => (res.json()))
    .then((res) => {
      this.isLoading = false;
      this.data = res;
    })
  }
}
