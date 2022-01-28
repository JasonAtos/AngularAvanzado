import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private theme = document.querySelector('#theme');

  constructor() { 
    let color:string = localStorage.getItem('theme') || 'purple-dark';
    // if(!color) color = ;    
    const url = `./assets/css/colors/${color}.css`;
    this.theme?.setAttribute('href', url);
  }

  changetheme(color:string){
    const url = `./assets/css/colors/${color}.css`;
    this.theme?.setAttribute('href', url);
    localStorage.setItem('theme', color);
    this.checkCurrentTheme();
  }

  checkCurrentTheme(){
    const links = document.querySelectorAll('.selector');
    const current = localStorage.getItem('theme');
    links.forEach(item => {
      item.classList.remove('working')
      const btnColor = item.getAttribute('data-theme');
      if(btnColor === current){
        item.classList.add('working');
      }
    });
  }

}
