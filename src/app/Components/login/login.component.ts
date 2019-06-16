import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mainForm: FormGroup;
  email = '';
  password = '';
  phone= '';
  hide = true; // for Visibility icon on password input field

  constructor(private fb: FormBuilder) {
    this.mainForm = this.fb.group({
      "email": ['', Validators.compose(
        [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]
        )],
      "phone": [
        '', Validators.required
      ],
      "password": ['', Validators.compose(
        [Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')])]
    });
  }

  ngOnInit() {
  }

}
