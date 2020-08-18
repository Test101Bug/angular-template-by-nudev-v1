import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      {
        path: '',
        loadChildren: () =>
          import('../../pages/pages.module').then((m) => m.PagesModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
