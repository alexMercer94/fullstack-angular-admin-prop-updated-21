import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from 'src/components/components.module';
import { SharedModule } from 'src/shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';

@NgModule({
  declarations: [
    DashboardComponent,
    Grafica1Component,
    ProgressComponent,
    PagesComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule,
    ComponentsModule,
  ],
  exports: [
    DashboardComponent,
    Grafica1Component,
    ProgressComponent,
    PagesComponent,
  ],
})
export class PagesModule {}
