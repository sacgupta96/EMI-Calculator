import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { ChartsModule } from 'ng2-charts';
import { PieChartComponent } from './pie-chart/pie-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    PieChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxSliderModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
