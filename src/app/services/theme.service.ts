import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private themeSubject = new BehaviorSubject<string>('black');
  theme$ = this.themeSubject.asObservable();

  constructor() {
    const savedTheme = localStorage.getItem('selectedTheme');
    if (savedTheme) {
      this.themeSubject.next(savedTheme);
      this.updateCSSVariables(savedTheme);
    } else {
      this.updateCSSVariables('default');
    }
  }

  setTheme(themeName: string) {
    this.themeSubject.next(themeName);
    this.updateCSSVariables(themeName);
    localStorage.setItem('selectedTheme', themeName);
  }

  getTheme(): string {
    return this.themeSubject.value;
  }

  private updateCSSVariables(themeName: string) {
    const root = document.documentElement;

    let primaryColor = '#333';
    let backgroundColor = '#f8f8f8';
    let textColor = '#fff';
    let itemBackgroundColor = '#fff';
    let itemHoverBackgroundColor = '444';
    let buttonColor = '#333';

    switch (themeName) {
      case 'blue':
        primaryColor = '#1b4f72';
        backgroundColor = '#2874a6';
        textColor = '#fff';
        itemBackgroundColor = '#2e86c1';
        itemHoverBackgroundColor = '#21618c';
        buttonColor = '#000';
        break;
      case 'red':
        primaryColor = '#78281f';
        backgroundColor = '#b03a2e';
        textColor = '#fff';
        itemBackgroundColor = '#e74c3c';
        itemHoverBackgroundColor = '#943126';
        buttonColor = '#dc3545';
        break;
      case 'green':
        primaryColor = '#186a3b';
        backgroundColor = '#239b56';
        textColor = '#fff';
        itemBackgroundColor = '#2ecc71';
        itemHoverBackgroundColor = '#1d8348';
        buttonColor = '#28a745';
        break;
      case 'brown':
        primaryColor = '#6e2c00';
        backgroundColor = '#a04000';
        textColor = '#fff';
        itemBackgroundColor = '#6e2c00';
        itemHoverBackgroundColor = '#873600';
        buttonColor = '#6f4e37';
        break;
      default:
        primaryColor = '#000';
        backgroundColor = '#222';
        textColor = '#fff';
        itemBackgroundColor = '#333';
        itemHoverBackgroundColor = '#444';
        buttonColor = '#000';
        break;
    }

    root.style.setProperty('--primary-color', primaryColor);
    root.style.setProperty('--background-color', backgroundColor);
    root.style.setProperty('--text-color', textColor);
    root.style.setProperty('--item-background-color', itemBackgroundColor);
    root.style.setProperty('--item-hover-background-color', itemHoverBackgroundColor);
    root.style.setProperty('--button-color', buttonColor);
  }
}
