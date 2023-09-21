import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  ubicacion: string = ''
  arr = ['/proyectos', '/proyectoIA']
  main: boolean = false
  constructor(private location: Location) {
    console.log(location.path())
    this.ubicacion = this.location.path()
    if (this.arr.find(o => o == this.ubicacion) != null) 
      this.main = false;
    else
      this.main = true;
    console.log(this.main)
  }
}
