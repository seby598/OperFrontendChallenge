import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiKey = environment.tmdbApiKey;
  private apiUrl = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {}

  searchMovies(query: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/search/movie`, {
      params: {
        api_key: this.apiKey,
        query,
      },
    });
  }

  searchTvShows(query: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/search/tv`, {
      params: {
        api_key: this.apiKey,
        query,
      },
    });
  }

  getTopRatedMovies(page: number = 1): Observable<any> {
    return this.http.get(`${this.apiUrl}/movie/top_rated`, {
      params: {
        api_key: this.apiKey,
        page: page.toString(),
      },
    });
  }

  getTopRatedTvShows(page: number = 1): Observable<any> {
    return this.http.get(`${this.apiUrl}/tv/top_rated`, {
      params: {
        api_key: this.apiKey,
        page: page.toString(),
      },
    });
  }

  getMovieDetails(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/movie/${id}`, {
      params: {
        api_key: this.apiKey,
      },
    });
  }
  
  getTvShowDetails(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/tv/${id}`, {
      params: {
        api_key: this.apiKey,
      },
    });
  }
}
