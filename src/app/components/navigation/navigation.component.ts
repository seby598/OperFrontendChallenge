import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ThemeService } from '../../services/theme.service';
import { SearchBarComponent } from '../search-bar/search-bar.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  standalone: true,
  imports: [RouterModule, CommonModule, SearchBarComponent, FormsModule],
})
export class NavigationComponent {
  availableThemes = ['black', 'blue', 'red', 'green', 'brown'];
  selectedTheme: string = 'black';

  constructor(private themeService: ThemeService) {
    this.selectedTheme = this.themeService.getTheme();
  }

  onThemeChange(theme: string) {
    this.selectedTheme = theme;
    this.themeService.setTheme(theme);
  }  
}
