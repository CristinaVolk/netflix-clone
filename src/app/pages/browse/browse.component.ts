import {Component, inject, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {HeaderComponent} from "../../core/components/header/header.component";
import {BannerComponent} from "../../core/components/banner/banner.component";
import {MovieCarouselComponent} from "../../shared/components/movie-carousel/movie-carousel.component";
import {MoviesService} from "../../core/services/movies.service";

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
  styleUrl: './browse.component.scss'
})
export class BrowseComponent implements OnInit {
  public userInfo = JSON.parse(sessionStorage.getItem('loggedInUser') ?? '{}')
  moviesService = inject(MoviesService)
  public popularMovies = []

  public sources = [
    this.moviesService.getMovies(),
    this.moviesService.getTvShows(),
    this.moviesService.getRatedMovies(),
    this.moviesService.getNowPlayingMovies(),
    this.moviesService.getUpcomingMovies(),
    this.moviesService.getPopularMovies(),
    this.moviesService.getTopRated(),
  ]

  ngOnInit(): void {
    this.moviesService.getMovies().subscribe(value => {
      console.log(value.results)
      this.popularMovies = value.results
    })
  }
}
