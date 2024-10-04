import {Component, inject, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {HeaderComponent} from "../../core/components/header/header.component";
import {BannerComponent} from "../../core/components/banner/banner.component";
import {MovieCarouselComponent} from "../../shared/components/movie-carousel/movie-carousel.component";
import {MoviesService} from "../../core/services/movies.service";
import {forkJoin, map, Observable} from "rxjs";
import {VideoContent} from "../../shared/models/video-content-interface";
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    BannerComponent,
    MovieCarouselComponent,
  ],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.scss',
})
export class BrowseComponent implements OnInit {
  public userInfo = JSON.parse(sessionStorage.getItem('loggedInUser') ?? '{}')
  private moviesService = inject(MoviesService)

  public movies: VideoContent[] = [];
  public tvShows: VideoContent[] = [];
  public nowPlayingMovies: VideoContent[] = [];
  public popularMovies: VideoContent[] = [];
  public topRatedMovies: VideoContent[] = [];
  public upcomingMovies: VideoContent[] = [];
  public bannerDetail = new Observable<any>()
  public bannerVideo = new Observable<any>()

  private sources = [
    this.moviesService.getMovies(),
    this.moviesService.getTvShows(),
    this.moviesService.getNowPlayingMovies(),
    this.moviesService.getUpcomingMovies(),
    this.moviesService.getPopularMovies(),
    this.moviesService.getTopRated()
  ];

  ngOnInit(): void {
    forkJoin(this.sources)
      .pipe(
        map(([movies, tvShows, nowPlaying, upcoming, popular, topRated]) => {
          this.bannerDetail = this.moviesService.getBannerDetail(movies.results[0].id)
          this.bannerVideo = this.moviesService.getBannerVideo(movies.results[0].id)

          return {movies, tvShows, nowPlaying, upcoming, popular, topRated}
        })
      ).subscribe((response: any) => {
      this.movies = response.movies.results as VideoContent[];
      this.tvShows = response.tvShows.results as VideoContent[];
      this.nowPlayingMovies = response.nowPlaying.results as VideoContent[];
      this.upcomingMovies = response.upcoming.results as VideoContent[];
      this.popularMovies = response.popular.results as VideoContent[];
      this.topRatedMovies = response.topRated.results as VideoContent[];
      this.getMovieKey()
    })
  }

  private getMovieKey() {
    this.moviesService.getBannerVideo(this.movies[0].id)
      .subscribe((value: any) => console.log(value.results[0].key))
  }
}
