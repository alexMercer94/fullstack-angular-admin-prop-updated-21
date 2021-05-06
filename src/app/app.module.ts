import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BreadcrumbsComponent } from 'src/shared/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from 'src/shared/header/header.component';
import { SidebarComponent } from 'src/shared/sidebar/sidebar.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
