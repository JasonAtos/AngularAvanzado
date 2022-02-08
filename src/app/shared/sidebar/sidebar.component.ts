import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  menuItems: any[];

  constructor( 
    private sidebarService: SidebarService,
   ) {
     this.menuItems = sidebarService.menu;     
    }

  ngOnInit(): void {
    const promesa = new Promise((resolve, reject) => {
      
      // if(false) resolve('hola banda');
      // else reject('algo fallo')
    });

    promesa.then((mnesaje) => {
      console.log(mnesaje);      
    })
    .catch(erro => console.log(erro)
    )
    // console.log('fin init');
  }

  getUsuario(){
    fetch
  }

  

}
