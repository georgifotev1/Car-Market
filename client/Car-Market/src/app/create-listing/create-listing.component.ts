import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-create-listing',
  templateUrl: './create-listing.component.html',
  styleUrls: ['./create-listing.component.scss'],
})
export class CreateListingComponent {
  form = this.fb.group({
    make: ['', [Validators.required]],
    model: ['', [Validators.required]],
    year: ['', [Validators.required]],
    mileage: ['', [Validators.required]],
    description: ['', [Validators.required]],
    fuelType: ['', [Validators.required]],
    price: ['', [Validators.required]],
    phoneNumber: ['', [Validators.required]],
    img: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private authService: AuthService,
    private router: Router
  ) {}

  createCarListing() {
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
    const _ownerId = sessionStorage.getItem('userId');
    this.apiService
      .createCar(
        make!,
        model!,
        year!,
        mileage!,
        description!,
        fuelType!,
        price!,
        phoneNumber!,
        img!,
        _ownerId!
      )
      .subscribe(() => {
        this.router.navigate(['/catalog']);
      });
  }
}
