import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ICars } from '../shared/interfaces/cars';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent implements OnInit {
  searchText = '';
  cars: any = null;
  allCars: ICars[] = [];
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.loadCars().subscribe((res) => {
      this.cars = res;
      this.allCars = this.cars;
    });
  }

  search(value: string): void {
    this.cars = this.allCars.filter((val) =>
      val.make.toLowerCase().includes(value)
    );
  }
}
