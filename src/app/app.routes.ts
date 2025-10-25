import { Routes } from '@angular/router';
import { ServicesComponent } from './components/pages/services/services.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ProjectsComponent } from './components/pages/projects/projects.component';

export const routes: Routes = [{ path: '', component: HomeComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'projects', component: ProjectsComponent },
];
