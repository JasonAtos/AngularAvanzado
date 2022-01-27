import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {
  
  @Input() progreso: number = 20;
  @Input() clase: string = 'btn-primary';
  // @Input('nombre') nombre: number = 20; asi se nombra un parametro
  @Output() progresoSalida: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.clase  = `btn ${this.clase}`;
  }

  get getPorcentaje() {
    return `${this.progreso}%`;
  }

  cambiarValor(valor:number){
    if(this.progreso >= 100 && valor >= 0){
      this.progreso = 100;
      this.progresoSalida.emit(100);
      return;
    }
    if(this.progreso <= 0 && valor <= 0){
      this.progreso = 0;
      this.progresoSalida.emit(0);
      return;
    }
    this.progreso += valor;
    this.progresoSalida.emit(this.progreso);
  }

  onChange(e:number){
    if(e >= 100) 
      this.progreso = 100
    else if (e <= 0)
      this.progreso = 0
    // else
    //   this.progreso = e;

    this.progresoSalida.emit(e);
  }

}
