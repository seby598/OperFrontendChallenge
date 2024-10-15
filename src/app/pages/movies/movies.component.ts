import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';

import { ApiService } from '../../services/api.service';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class MoviesComponent implements OnInit, OnDestroy  {
  topRatedMovies: any[] = [];
  private configSubscription!: Subscription;

  constructor(private apiService: ApiService, private configService: ConfigService) {}

  ngOnInit() {
    this.configSubscription = this.configService.defaultItemCount$.subscribe(() => {
      this.loadTopRatedMovies();
    });

    this.loadTopRatedMovies();
  }

  ngOnDestroy() {
    if (this.configSubscription) {
      this.configSubscription.unsubscribe();
    }
  }

  loadTopRatedMovies() {
    this.apiService.getTopRatedMovies().subscribe((data) => {
      const itemCount = this.configService.defaultItemCount;
      this.topRatedMovies = data.results.slice(0, itemCount);
    });
  }
}
