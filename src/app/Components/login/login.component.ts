import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mainForm: FormGroup;
  email: string = "";
  phone: string = "";
  password: string = "";
  hide = true; // for Visibility icon on password input field

  constructor(private fb: FormBuilder) { 
    this.mainForm = this.fb.group({
      "password": ["", Validators.compose([Validators.required])],
      "phone": ["", Validators.required]
    }); 
  }

  ngOnInit() {
  }

}
