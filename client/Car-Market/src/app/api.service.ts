import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { ICars } from './shared/interfaces/cars';
import { IUser } from './shared/interfaces';

const apiURL = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  loadCars() {
    return this.httpClient.get<ICars>('catalog');
  }

  loadCarById(id: string) {
    return this.httpClient.get<ICars>('catalog/' + id);
  }

  getOwner(id: string) {
    return this.httpClient.get<IUser>('catalog/owner/' + id);
  }

  updateCar(
    id: string,
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
    return this.httpClient.put<ICars>('catalog/' + id, {
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

  createCar(
    make: string,
    model: string,
    year: string,
    mileage: string,
    description: string,
    fuelType: string,
    price: string,
    phoneNumber: string,
    img: string,
    _ownerId: string
  ) {
    return this.httpClient.post<ICars>('catalog/create', {
      make,
      model,
      year,
      mileage,
      description,
      fuelType,
      price,
      phoneNumber,
      img,
      _ownerId,
    });
  }

  deleteCar(id: string) {
    return this.httpClient.delete<void>('catalog/' + id);
  }
}
