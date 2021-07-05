import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { ChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

describe('AppComponent', () => {
  let component;
  let fixture: ComponentFixture<any>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        PieChartComponent
      ],
      imports: [
        BrowserModule,
        FormsModule,
        NgxSliderModule,
        ChartsModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });


  it('should calculate the EMI' , () => {
    const x = { principle: 50000 , interest: 10 , duration: 120 };
    expect(Math.round(component.getLoanAmount(x))).toBe(661);
  });
});
