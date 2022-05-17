import { Component, OnInit } from '@angular/core';
import { UserprofileService } from '../userprofile.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(private address: UserprofileService) {

    let ad=this.address.getAddress();
    console.log(ad);
  }

  ngOnInit(): void {
  }

}
