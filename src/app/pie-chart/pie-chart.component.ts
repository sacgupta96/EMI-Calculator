import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
 
@Component({
  selector: 'pie-chart',
  templateUrl: './pie-chart.component.html'
})
export class PieChartComponent implements OnInit , OnChanges {
  
  @Input() principle;
  @Input() interest;

  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = ['Principle Loan Amount' , 'Total Interest paid'];
  public pieChartData: SingleDataSet = [300, 500];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  ngOnInit() {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnChanges() {
    this.pieChartData = [ this.principle , this.interest];
  }
}
