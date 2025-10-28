import { Routes } from '@angular/router';
import { APP_ROUTES } from './app.routes.const';
import { ServicesComponent } from './pages/services-page/services.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact-page/contact.component';

export const routes: Routes = [
  { path: APP_ROUTES.home, component: HomeComponent },
  { path: APP_ROUTES.services, component: ServicesComponent },
  { path: APP_ROUTES.contact, component: ContactComponent },
  { path: '**', redirectTo: APP_ROUTES.home }
];
