import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  // Button -> go back to previous page
  goBack() {
    this.location.back();
  }

  onSubmit(formdata: NgForm) {
    console.warn(formdata);
  }

}
