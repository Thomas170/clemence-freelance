import { Routes } from '@angular/router';
import { ServicesComponent } from './components/pages/services-page/services.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ProjectsComponent } from './components/pages/projects-page/projects.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: '**', redirectTo: '' }
];
