import { Routes } from '@angular/router';
import { Layout } from './core/layout/layout';
import { UserManagementHome } from './components/user-management-home/user-management-home';
import { NotFoundComponent } from './components/not-found-component/not-found-component';

export const routes: Routes =[
  {
    path: '',
    component: Layout,
    children: [
      { path: '', redirectTo: 'users', pathMatch: 'full' },
      { path: 'users', component: UserManagementHome },
      { path: 'dashboard', component: NotFoundComponent },
      { path: 'reports', component: NotFoundComponent },
      { path: 'emergency', component: NotFoundComponent },
      { path: 'complaints', component: NotFoundComponent },
      { path: 'attendance', component: NotFoundComponent },
      { path: 'mess', component: NotFoundComponent },
      { path: 'fees', component: NotFoundComponent },
      { path: 'amenities', component: NotFoundComponent },
      { path: 'inventory', component: NotFoundComponent },
      { path: 'visitors', component: NotFoundComponent },
      { path: 'community', component: NotFoundComponent },
      { path: 'laundry', component: NotFoundComponent },
      { path: 'rooms', component: NotFoundComponent },
      { path: 'parcel', component: NotFoundComponent },
      { path: '**', component: NotFoundComponent }
    ]
  }
];

