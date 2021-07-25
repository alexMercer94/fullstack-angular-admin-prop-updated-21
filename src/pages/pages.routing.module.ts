import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';
import { Grafica1Component } from './Dashboard/grafica1/grafica1.component';
import { ProgressComponent } from './Dashboard/progress/progress.component';
import { PagesComponent } from './pages.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: PagesComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
        data: {
          title: 'Dashboard',
        },
      },
      {
        path: 'chart',
        component: Grafica1Component,
        data: {
          title: 'Gráfica',
        },
      },
      {
        path: 'progress',
        component: ProgressComponent,
        data: {
          title: 'ProgressBar',
        },
      },
      {
        path: 'account-settings',
        component: AccountSettingsComponent,
        data: {
          title: 'Ajustes de Cuenta',
        },
      },
      {
        path: 'promesas',
        component: PromesasComponent,
        data: {
          title: 'Promesas',
        },
      },
      {
        path: 'rxjs',
        component: RxjsComponent,
        data: {
          title: 'RxJs',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
