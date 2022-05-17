import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserprofileService {

  constructor() {

  }
  getAddress() {
    let add = {
      area: 'Balewadi',
      locality: 'Punchshil BusinessPark',
      city: 'Pune'
    };
    return add;
  }
  getCompanyName() {
    return 'T-Systems ICT India Pvt. Ltd.';
  }
}
