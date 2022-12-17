import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { ICars } from '../shared/interfaces/cars';

@Component({
  selector: 'app-update-listing',
  templateUrl: './update-listing.component.html',
  styleUrls: ['./update-listing.component.scss'],
})
export class UpdateListingComponent implements OnInit {
  id: string | null = null;
  data: ICars | null = null;

  form = this.fb.group({
    make: ['', [Validators.required, Validators.minLength(2)]],
    model: ['', [Validators.required, Validators.minLength(2)]],
    year: [
      '',
      [Validators.required, Validators.min(1950), Validators.max(2022)],
    ],
    mileage: ['', [Validators.required, Validators.min(0)]],
    description: ['', [Validators.required, Validators.minLength(10)]],
    fuelType: ['', [Validators.required]],
    price: ['', [Validators.required, Validators.min(0)]],
    phoneNumber: [
      '',
      [Validators.required, Validators.minLength(10), Validators.maxLength(10)],
    ],
    img: ['', [Validators.required]],
  });

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      {
        this.id &&
          this.apiService.loadCarById(this.id).subscribe((res) => {
            this.data = res;
            this.form.setValue({
              make: this.data.make,
              model: this.data.model,
              year: this.data.year,
              mileage: this.data.mileage,
              description: this.data.description,
              fuelType: this.data.fuelType,
              price: this.data.price,
              phoneNumber: this.data.phoneNumber,
              img: this.data.img,
            });
          });
      }
    });
  }

  updateCarListing() {
    const {
      make,
      model,
      year,
      mileage,
      description,
      fuelType,
      price,
      phoneNumber,
      img,
    } = this.form.value;

    return this.apiService
      .updateCar(
        this.id!,
        make!,
        model!,
        year!,
        mileage!,
        description!,
        fuelType!,
        price!,
        phoneNumber!,
        img!
      )
      .subscribe(() => {
        this.router.navigate(['/catalog']);
      });
  }
}
