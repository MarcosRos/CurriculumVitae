import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent {
  desc: boolean = true;
  indice: number = -1;
  proyectos: any[] = [{ titulo: 'Proyecto IA', ruta: '/proyectoIA', img: 'ia.png', descripcion: 'Consumiendo como API una IA entrenada en Python, la misma es capaz de determinar el tipo de objeto que se envie como imagen desde el Front-End en Angular', fecha: '21/09/2023' },
  ]

  constructor(private router : Router){}

  onHover(i: number) {
    this.desc = false;
    this.indice = i
  }
  onLeave(i: number) {
    this.desc = true;
    this.indice = -1
  }
  goTo(ruta:string) {
    this.router.navigateByUrl(ruta)
  }
}
