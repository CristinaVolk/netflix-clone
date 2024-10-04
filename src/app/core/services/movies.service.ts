import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

const BASE_URL = `https://api.themoviedb.org/3`
const options = {
  params: {
    include_adult: 'false',
    include_video: 'true',
    language: 'en-US',
    page: '1',
    sort_by: 'popularity.desc'
  },
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZmIzZmZhMmU1MmJkNDE0MDY4ODhkMzY0MTQ4YjU1NiIsIm5iZiI6MTcyODAxMzczNi4wNjI4MzMsInN1YiI6IjY2NzlhNGIwYTk2YmNiZjYyYmI4NTc3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jORx-pRpuHLwSy9YL4R0jQlWPaFRpYuL0I0rgSzHio0'
  }
}

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor() { }

  public http = inject(HttpClient)

  public getMovies() {
    return this.http.get<any>(`https://api.themoviedb.org/3/discover/movie`, options)
  }

  getTvShows() {
    return this.http.get(`https://api.themoviedb.org/3/discover/tv`, options)
  }

  getRatedMovies() {
    return this.http.get(`${BASE_URL}/rated/movies`, options)
  }

  getBannerImage(id: number) {
    return this.http.get(`${BASE_URL}/movie/${id}/images`, options)
  }

  getBannerVideo(id: number) {
    return this.http.get(`${BASE_URL}/movie/${id}/videos`, options);
  }

  getBannerDetail(id: number) {
    return this.http.get(`${BASE_URL}/movie/${id}`, options);
  }

  getNowPlayingMovies() {
    return this.http.get(`${BASE_URL}/movie/now_playing`, options)
  }

  getPopularMovies() {
    return this.http.get(`${BASE_URL}/movie/popular`, options)
  }

  getTopRated() {
    return this.http.get(`${BASE_URL}/movie/top_rated`, options)
  }

  getUpcomingMovies() {
    return this.http.get(`${BASE_URL}/movie/upcoming`, options)
  }
}
