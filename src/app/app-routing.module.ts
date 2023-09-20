import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { IaComponent } from './components/ia/ia.component';

const routes: Routes = [
  { path: 'perfil', component: PerfilComponent},
  { path: 'proyectos', component: ProyectosComponent},
  { path: 'proyectoIA', component: IaComponent},
  { path: '**', component: PerfilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
