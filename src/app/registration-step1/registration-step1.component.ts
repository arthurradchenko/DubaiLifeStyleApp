import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import vocData from '../../environments/vocabulary.json';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-step1',
  templateUrl: './registration-step1.component.html',
  styleUrls: ['./registration-step1.component.sass']
})
export class RegistrationStep1Component implements OnInit {
  
  regFormUp: FormGroup;
  regFormDown: FormGroup;
  vocabulary: any = vocData;
  time: number = 900*1000;
  constructor( private router: Router) { 
      var timer = setInterval(() => {
        this.time = this.time - 1000;
        if(this.time <= 0) clearInterval(timer);
      }, 1000);
   }

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
  step2Up()
  {
    this.router.navigate(['/step2'], {queryParams: {'firstname': this.regFormUp.value.name,'email': this.regFormUp.value.mail}});
  }
  step2Down()
  {
    this.router.navigate(['/step2'], {queryParams: {'firstname': this.regFormDown.value.name,'email': this.regFormDown.value.mail}});
  }
}
