import { RouterModule, Routes } from '@angular/router';
import { PersonajesComponent } from './personajes/personajes.component';
import { ResidentesComponent } from './residentes/residentes.component';
import { SidebarComponent } from './sidebar/sidebar.component';
const routes: Routes = [
  { path: 'personaje', component: PersonajesComponent  },
  { path: 'residentes', component: ResidentesComponent  }
];

const APP_ROUTES: Routes = [
  { path: 'buscar/:palabra', component: SidebarComponent }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);

export const routing = RouterModule.forRoot(routes);
