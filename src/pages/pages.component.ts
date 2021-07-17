import { Component, OnInit } from '@angular/core';
import { SettignsService } from 'src/services/settigns.service';
declare function customInitFunctions(): any;

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [],
})
export class PagesComponent implements OnInit {
  constructor(private settingsService: SettignsService) {}

  ngOnInit(): void {
    customInitFunctions();
  }
}
