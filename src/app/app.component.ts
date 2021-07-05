
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit , OnDestroy {
  model = { principle: 50000 , interest: 10 , duration: 120};
  public totalInterest: number;
  @ViewChild('form' , { static: true }) ngForm: NgForm;
  formChangesSubscription: any;
  EMI: number;
  principleOptions: Options = {
    floor: 0,
    ceil: 10000000
  };
  interestOptions: Options = {
    floor: 5,
    ceil: 20,
    step: 0.5,
  };
  durationOptions: Options = {
    floor: 1,
    ceil: 360
  };

  ngOnInit() {
    this.formChangesSubscription = this.ngForm.form.valueChanges.subscribe(x => {
      if (Object.keys(x).length === 3) {
        this.EMI = Math.round(this.getLoanAmount(x));
        this.totalInterest = this.EMI * this.model.duration - this.model.principle;
      }
    });
  }

  ngOnDestroy() {
    this.formChangesSubscription.unsubscribe();
  }

  private getLoanAmount(x) {
   const interestPerMonth = x.interest / 1200;
   const expFactor = Math.pow(interestPerMonth + 1 , x.duration);
   return (x.principle * interestPerMonth * expFactor) / (expFactor - 1);
  }
}
