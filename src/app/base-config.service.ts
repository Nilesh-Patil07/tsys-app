import { Injectable } from '@angular/core';
import { UserprofileService } from './userprofile.service';

@Injectable({
  providedIn: 'root'
})
export class BaseConfigService {

  url="www.something";

  constructor(private userserv:UserprofileService) { 
let user=this.userserv.getAddress();
console.log(user);
  };
}
