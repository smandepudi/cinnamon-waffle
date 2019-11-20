import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.scss']
})
export class SimpleFormComponent implements OnInit {
  user: any = {};
  constructor() { }

  ngOnInit() {
  }
  onSubmit(profileForm) {
    console.log(profileForm.value);
  }
}
