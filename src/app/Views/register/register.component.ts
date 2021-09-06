import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  }); 
  constructor() { }

  ngOnInit(): void {
  }

}
