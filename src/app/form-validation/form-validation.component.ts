import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.scss']
})
export class FormValidationComponent implements OnInit {
  model: any = {};
  constructor() { }

  ngOnInit() {
  }
  onSubmit(profileForm) {
    console.log(profileForm.value);
  }
}
