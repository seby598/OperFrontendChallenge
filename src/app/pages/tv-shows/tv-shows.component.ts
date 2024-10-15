import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';

import { ApiService } from '../../services/api.service';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class TvShowsComponent implements OnInit {
  topRatedTvShows: any[] = [];
  private configSubscription!: Subscription;

  constructor(private apiService: ApiService, private configService: ConfigService) {}

  ngOnInit() {
    this.configSubscription = this.configService.defaultItemCount$.subscribe(() => {
      this.loadTopRatedTvShows();
    });

    this.loadTopRatedTvShows();
  }

  ngOnDestroy() {
    if (this.configSubscription) {
      this.configSubscription.unsubscribe();
    }
  }

  loadTopRatedTvShows() {
    this.apiService.getTopRatedTvShows().subscribe((data) => {
      const itemCount = this.configService.defaultItemCount;
      this.topRatedTvShows = data.results.slice(0, itemCount);
    });
  }
}
