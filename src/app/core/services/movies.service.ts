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
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZmIzZmZhMmU1MmJkNDE0MDY4ODhkMzY0MTQ4YjU1NiIsIm5iZiI6MTcyNzc0ODQ5Ny43NTYwMDYsInN1YiI6IjY2NzlhNGIwYTk2YmNiZjYyYmI4NTc3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RfQRJSx1N9uFDbisSpF0x4x4QJ5lXQzhllKK8sKGadU'
  }
}

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor() { }

  public http = inject(HttpClient)

  public getMovies() {
    return this.http.get<any>(`${BASE_URL}/discover/movie`, options)
  }

  getTvShows() {
    return this.http.get(`${BASE_URL}/3/discover/tv`, options)
  }

  getRatedMovies() {
    return this.http.get(`${BASE_URL}/3/guest_session/guest_session_id/rated/movies`, options)
  }

  getBannerImage(id: number) {
    return this.http.get(`${BASE_URL}/3/movie/${id}/images`, options)
  }

  getBannerVideo(id: number) {
    return this.http.get(`${BASE_URL}/3/movie/${id}/videos`, options);
  }

  getBannerDetail(id: number) {
    return this.http.get(`${BASE_URL}/3/movie/${id}`, options);
  }

  getNowPlayingMovies() {
    return this.http.get(`${BASE_URL}/3/movie/now_playing`, options)
  }

  getPopularMovies() {
    return this.http.get(`${BASE_URL}/3/movie/popular`, options)
  }

  getTopRated() {
    return this.http.get(`${BASE_URL}/3/movie/top_rated`, options)
  }

  getUpcomingMovies() {
    return this.http.get(`${BASE_URL}/3/movie/upcoming`, options)
  }
}
