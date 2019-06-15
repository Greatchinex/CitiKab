import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  mainForm: FormGroup;
  fullName: string = "";
  email: string = "";
  password: string = "";
  phone= "";
  hide = true; // for Visibility icon on password input field

  constructor(private fb: FormBuilder) { 
    this.mainForm = this.fb.group({
      "fullName": ["", Validators.compose([Validators.required])],
      "email": ["", Validators.compose([Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)])],
      "password": ["", Validators.compose([Validators.required])],
      "phone": ["", Validators.compose([Validators.required])]
    });   
  }

  ngOnInit() {
  }

}
