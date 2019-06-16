import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-driver-signup',
  templateUrl: './driver-signup.component.html',
  styleUrls: ['./driver-signup.component.css']
})
export class DriverSignupComponent implements OnInit {

  mainForm: FormGroup;
  carCompany = "";
  carModel = "";
  plateNumber = "";
  password = "";
  

  constructor(private fb: FormBuilder) { 
    this.mainForm = this.fb.group({
      "carCompany": ["", Validators.required],
      "carModel": ["", Validators.required],
      "plateNumber": ["", Validators.required],
      "password": ["", Validators.required],
    })
  }

  ngOnInit() {
  }

}
