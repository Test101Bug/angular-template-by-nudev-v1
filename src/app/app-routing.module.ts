import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import RoutesList from './config/routes';

const routes: Routes = RoutesList;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
