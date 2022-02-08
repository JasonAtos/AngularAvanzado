import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {

  titulo:string = '';
  tituloSub$: Subscription

  constructor(
    private router: Router
  ) {
    this.tituloSub$ = this.getData()
                      .subscribe(({title}) => {
                        this.titulo = title;
                        document.title = `AdminPro - ${this.titulo}`;
                      });
   }

   getData(){
    return this.router.events.pipe(
      filter((f): f is ActivationEnd => f instanceof ActivationEnd), //Filtra solo tipos de activation end
      filter((e: ActivationEnd) => e.snapshot.firstChild === null), //filtra los nulos
      map( (e: ActivationEnd) => e.snapshot.data ) //solo regresa la propiedad data
    );

   }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
      this.tituloSub$.unsubscribe();
  }

}
