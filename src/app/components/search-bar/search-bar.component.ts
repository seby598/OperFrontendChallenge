import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  switchMap,
  tap,
} from 'rxjs/operators';

import { ApiService } from '../../services/api.service';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
})
export class SearchBarComponent {
  searchControl = new FormControl('');
  searchResults: any[] = [];

  constructor(private apiService: ApiService, private router: Router) {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(1000),
        distinctUntilChanged(),
        tap((term) => {
          if (!term || term.length < 3) {
            this.searchResults = [];
          }
        }),
        filter((term): term is string => term !== null && term.length >= 3),
        switchMap((term) => this.performSearch(term, this.currentTab))
      )
      .subscribe((data) => {
        this.searchResults = data.results;
      });

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        const term = this.searchControl.value;
        if (term && term.length >= 3) {
          this.performSearch(term, this.currentTab).subscribe((data) => {
            this.searchResults = data.results;
          });
        }
      });
  }

  get currentTab(): 'movie' | 'tv' {
    if (this.router.url.includes('/movie')) {
      return 'movie';
    } else if (this.router.url.includes('/tv')) {
      return 'tv';
    } else {
      return 'movie';
    }
  }

  performSearch(term: string, type: 'movie' | 'tv') {
    if (type === 'movie') {
      return this.apiService.searchMovies(term);
    } else {
      return this.apiService.searchTvShows(term);
    }
  }

  clearSearch() {
    this.searchControl.setValue('');
    this.searchResults = [];
  }
}
