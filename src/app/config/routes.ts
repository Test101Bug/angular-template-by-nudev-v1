import { MainComponent } from './../layouts/main/main.component';
import { LoginComponent } from '../layouts/login/login.component';

export default [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: MainComponent,
    loadChildren: () =>
      import('../pages/pages.module').then((m) => m.PagesModule),
  }
];
