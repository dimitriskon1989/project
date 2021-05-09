import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  // Button -> go back to previous page
  goBack() {
    this.location.back();
  }

  onSubmit(formdata: any) {
    console.warn(formdata);
  }
}
