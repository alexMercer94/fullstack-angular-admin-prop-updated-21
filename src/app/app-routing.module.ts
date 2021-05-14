import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/pages/auth/login/login.component';
import { RegisterComponent } from 'src/pages/auth/register/register.component';
import { DashboardComponent } from 'src/pages/dashboard/dashboard.component';
import { Grafica1Component } from 'src/pages/grafica1/grafica1.component';
import { NoPageFoundComponent } from 'src/pages/no-page-found/no-page-found.component';
import { PagesComponent } from 'src/pages/pages.component';
import { ProgressComponent } from 'src/pages/progress/progress.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'grafica1',
        component: Grafica1Component,
      },
      {
        path: 'progress',
        component: ProgressComponent,
      },
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },

  {
    path: '**',
    component: NoPageFoundComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
