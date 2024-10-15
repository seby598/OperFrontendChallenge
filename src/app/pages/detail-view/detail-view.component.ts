import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';

import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class DetailViewComponent implements OnInit {
  item: any;
  type: string = 'movie';

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.type = params['type'];
      const id = params['id'];

      if (this.type === 'movie') {
        this.apiService.getMovieDetails(id).subscribe((data) => {
          this.item = data;
        });
      } else if (this.type === 'tv') {
        this.apiService.getTvShowDetails(id).subscribe((data) => {
          this.item = data;
        });
      }
    });
  }
}
