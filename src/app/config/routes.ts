import { LoginComponent } from '../layouts/login/login.component';

export default [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: '',
    loadChildren: () =>
      import('../pages/pages.module').then((m) => m.PagesModule),
  },
  // {
  //   path: '',
  //   loadChildren: () =>
  //     import('../layouts/main/main.module').then((m) => m.MainModule),
  // },
];
