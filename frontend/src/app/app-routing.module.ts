import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from 'src/pages/auth/auth.routing.module';
import { NoPageFoundComponent } from 'src/pages/no-page-found/no-page-found.component';
import { PagesRoutingModule } from 'src/pages/pages.routing.module';

const routes: Routes = [
  // Path: '/dashboard' PagesRouting
  // path '/login', '/register' AuthRouting
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: NoPageFoundComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, PagesRoutingModule, AuthRoutingModule],
})
export class AppRoutingModule {}
