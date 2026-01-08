import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent),
    title: 'Welcome - Community Help'
  },
  {
    path: 'register',
    loadComponent: () => import('./components/register/register.component').then(m => m.RegistrationComponent),
    title: 'Register - Community Help'
  },
  {
    path: 'requests',
    loadComponent: () => import('./components/requests/request-list/request-list.component').then(m => m.RequestListComponent),
    title: 'Help Requests - Community Help'
  },
  {
    path: 'requests/new',
    loadComponent: () => import('./components/requests/help-request/help-request.component').then(m => m.HelpRequestComponent),
    title: 'New Request - Community Help'
  },
  {
    path: 'requests/:id/status',
    loadComponent: () => import('./components/requests/request-status/request-status.component').then(m => m.RequestStatusComponent),
    title: 'Request Status - Community Help'
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
