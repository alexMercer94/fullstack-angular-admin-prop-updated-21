import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SettignsService {
  public defaultTheme = './assets/css/colors/blue-dark.css';
  public linkTheme = document.querySelector('#theme');
  public themeFromLS = '';

  constructor() {
    this.themeFromLS = localStorage.getItem('theme') || this.defaultTheme;
    this.linkTheme?.setAttribute('href', this.themeFromLS);
  }

  /**
   * Change theme color
   * @param theme
   */
  public changeTheme(theme: string): void {
    const url = `./assets/css/colors/${theme}.css`;
    this.linkTheme?.setAttribute('href', url);
    localStorage.setItem('theme', url);
    this.checkCurrentTheme();
  }

  public checkCurrentTheme(): void {
    const links = document.querySelectorAll('.selector');
    links.forEach((element) => {
      element.classList.remove('working');
      const btnTheme = element.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;
      const currentTheme = this.linkTheme?.getAttribute('href');

      if (btnThemeUrl === currentTheme) {
        element.classList.add('working');
      }
    });
  }
}
