import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {

  progreso1 = 25;
  progreso2 = 35;

  constructor() { }

  ngOnInit(): void {
  }

  get getPro1(){
    return `${this.progreso1}%`;
  }
  get getPro2(){
    return `${this.progreso2}%`;
  }

  cambioHijo(e: number){
    console.log(e);
    
  }

}
