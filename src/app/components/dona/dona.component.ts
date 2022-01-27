import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartDataset, ChartDatasetProperties } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit {

  @Input() titulo:string = 'Sin Titulo';  
  @Input('labels') doughnutChartLabels: string[] = ['Label1', 'Label2', 'Label3'];
  @Input() data: number[] = [100,100,100];


  public doughnutChartData: ChartData<'doughnut'> = {
    datasets: [
      { data: [] },
    ]
  };

  constructor() { }

  ngOnInit(): void {    

    this.doughnutChartData.labels = this.doughnutChartLabels;
    this.doughnutChartData.datasets = [
      {data: this.data}
    ]
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
