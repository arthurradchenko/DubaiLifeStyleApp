import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import vocData from '../../environments/vocabulary.json';

@Component({
  selector: 'app-registration-step1',
  templateUrl: './registration-step1.component.html',
  styleUrls: ['./registration-step1.component.sass']
})
export class RegistrationStep1Component implements OnInit {
  
  regFormUp: FormGroup;
  regFormDown: FormGroup;
  vocabulary: any = vocData;
  constructor() { }

  ngOnInit() {
    console.log(this.vocabulary);
    this.regFormUp = new FormGroup(
      {
        'name': new FormControl('', [
          Validators.required,
          Validators.pattern('^[a-zA-Z ]+$')
        ]),
        'mail': new FormControl('', [
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$')
        ])
      }
    )    
    this.regFormDown = new FormGroup(
      {
        'name': new FormControl('', [
          Validators.required,
          Validators.pattern('^[a-zA-Z ]+$')
        ]),
        'mail': new FormControl('', [
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$')
        ])
      }
    ) 
  }

}
