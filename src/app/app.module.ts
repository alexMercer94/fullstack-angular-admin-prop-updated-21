import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PagesComponent } from 'src/pages/pages.component';
import { BreadcrumbsComponent } from 'src/shared/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from 'src/shared/header/header.component';
import { SidebarComponent } from 'src/shared/sidebar/sidebar.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    PagesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
