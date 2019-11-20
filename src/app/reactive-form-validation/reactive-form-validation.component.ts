import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-validation',
  templateUrl: './reactive-form-validation.component.html',
  styleUrls: ['./reactive-form-validation.component.scss']
})
export class ReactiveFormValidationComponent implements OnInit {
  constructor() { }

  userForm = new FormGroup({
    name: new FormControl('Frodo', [Validators.required, Validators.minLength(4)]),
    email: new FormControl('fbaggins@gmail.com', Validators.required),
    address: new FormGroup({
      street: new FormControl('The Shire'),
      city: new FormControl('Middle Earth'),
      postalcode: new FormControl('10000')
    })
  });
  onSubmit() {
    console.log(this.userForm.value);
  }
  ngOnInit() {
  }


}
