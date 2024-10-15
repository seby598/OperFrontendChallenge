import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'tv-shows', pathMatch: 'full' },
  {
    path: 'movies',
    loadComponent: () =>
      import('./pages/movies/movies.component').then((c) => c.MoviesComponent),
  },
  {
    path: 'tv-shows',
    loadComponent: () =>
      import('./pages/tv-shows/tv-shows.component').then(
        (c) => c.TvShowsComponent
      ),
  },
  {
    path: 'details/:type/:id',
    loadComponent: () =>
      import('./pages/detail-view/detail-view.component').then(
        (c) => c.DetailViewComponent
      ),
  },
  { path: '**', redirectTo: 'tv-shows' },
];
