import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpParams } from '@angular/common/http';
import { ICars } from '../shared/interfaces/cars';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.scss'],
})
export class CarDetailsComponent implements OnInit {
  id: string | null = null;
  data: ICars | null = null;
  owner: undefined | string = undefined;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      {
        this.id &&
          this.apiService.loadCarById(this.id).subscribe((res) => {
            this.data = res;
            this.owner = this.authService.user?._id;
          });
      }
    });
  }

  deleteCarListing() {
    this.apiService.deleteCar(this.id!).subscribe(() => {
      this.router.navigate(['catalog']);
    });
  }
}
