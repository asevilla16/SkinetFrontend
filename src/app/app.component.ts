import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IProduct, Pagination } from './models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'SkinetFrontend';

  products: IProduct[] = [];

  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.http.get<Pagination<IProduct[]>>('https://localhost:44357/api/products').subscribe({
      next: (res) => {
        console.log(res);
        this.products = res.data;
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log("Finisht");
      }
    })
  }
}
