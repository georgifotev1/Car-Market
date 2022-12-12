import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { ICars } from './shared/interfaces/cars';

const apiURL = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  loadCars() {
    return this.httpClient.get('catalog'); // Get all cars from database
  }

  createCar(
    make: string,
    model: string,
    year: string,
    mileage: string,
    description: string,
    fuelType: string,
    price: string,
    phoneNumber: string,
    img: string
  ) {
    return this.httpClient.post<any>('catalog/create', {
      make,
      model,
      year,
      mileage,
      description,
      fuelType,
      price,
      phoneNumber,
      img,
    });
  }
}
