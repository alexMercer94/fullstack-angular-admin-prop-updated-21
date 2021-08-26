import { Component, OnInit } from '@angular/core';
import { SettignsService } from 'src/services/settigns.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [],
})
export class AccountSettingsComponent implements OnInit {
  constructor(private settingsService: SettignsService) {}

  ngOnInit(): void {
    this.settingsService.checkCurrentTheme();
  }

  /**
   * Change theme color
   * @param theme
   */
  public changeTheme(theme: string): void {
    this.settingsService.changeTheme(theme);
  }
}
