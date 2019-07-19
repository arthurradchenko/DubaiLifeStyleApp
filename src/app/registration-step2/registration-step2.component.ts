import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import vocData from '../../environments/vocabulary.json';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-registration-step2',
  templateUrl: './registration-step2.component.html',
  styleUrls: ['./registration-step2.component.sass']
})
export class RegistrationStep2Component implements OnInit {
  
  regFormUp: FormGroup;
  regFormDown: FormGroup;
  vocabulary: any = vocData;
  time: number = 900*1000;
  name: string;
  mail: string;
  private queryParamsSub: Subscription;
  
  constructor( private route: ActivatedRoute) {
    this.queryParamsSub = route.queryParams.subscribe(
      (queryParam: any) => {
          this.name = queryParam['firstname'];
          this.mail = queryParam['email'];
      }
  );
    var timer = setInterval(() => {
      this.time = this.time - 1000;
      if(this.time <= 0) clearInterval(timer);
    }, 1000);
   }

  ngOnInit() {
    this.regFormUp = new FormGroup(
      {
        'firstname': new FormControl(this.name, [
          Validators.required,
          Validators.pattern('^[a-zA-Z ]+$')
        ]),
        'lastname': new FormControl('', [
          Validators.required,
          Validators.pattern('^[a-zA-Z ]+$')
        ]),
        'mail': new FormControl(this.mail, [
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$')
        ]),
        'password': new FormControl('', [
          Validators.required,
          Validators.pattern('^.{6,12}$')
        ]),
        'country': new FormControl('', Validators.required)
      }
    )    
    this.regFormDown = new FormGroup(
      {
        'firstname': new FormControl(this.name, [
          Validators.required,
          Validators.pattern('^[a-zA-Z ]+$')
        ]),
        'lastname': new FormControl('', [
          Validators.required,
          Validators.pattern('^[a-zA-Z ]+$')
        ]),
        'mail': new FormControl(this.mail, [
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$')
        ]),
        'password': new FormControl('', [
          Validators.required,
          Validators.pattern('^[a-zA-Z ]+$')
        ]),
        'country': new FormControl('')
      }
    ) 
  }
  register()
  {
    if(this.regFormUp.valid || this.regFormDown.valid) alert(this.vocabulary.REGISTRATION.SUCCESS);
    else alert(this.vocabulary.REGISTRATION.FAILURE);
  }

}
