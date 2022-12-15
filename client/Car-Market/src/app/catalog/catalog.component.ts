import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent implements OnInit {
  data: any = null;

  constructor(private apiService: ApiService) {}
  ngOnInit() {
    this.apiService.loadCars().subscribe((res) => {
      this.data = res;
    });
  }
}
