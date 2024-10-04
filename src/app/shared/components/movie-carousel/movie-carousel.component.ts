import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import Swiper from "swiper";
import {VideoContent} from "../../models/video-content-interface";
import {DescriptionPipe} from "../../pipes/description.pipe";
import {ImagePipe} from "../../pipes/image.pipe";
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-movie-carousel',
  standalone: true,
  imports: [
    NgForOf,
    DescriptionPipe,
    ImagePipe,
    NgIf,
  ],
  templateUrl: './movie-carousel.component.html',
  styleUrl: './movie-carousel.component.scss',
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity:0 }),
        animate(300, style({ opacity: 1}))
      ])
    ])
  ]
})
export class MovieCarouselComponent implements OnInit, AfterViewInit {
  @Input() title = ''
  @Input()  videoContents: VideoContent[] = []

  @ViewChild('swiperContainer') swiperContainer: ElementRef | undefined ;

  public selectedMovieContent: string | null = null

  ngAfterViewInit(): void {
    this.initSwiper()
  }

  ngOnInit(): void {
  }

  private initSwiper() {
    return new Swiper(this.swiperContainer?.nativeElement, {
      slidesPerView: 3,
      slidesPerGroup: 2,
      centeredSlides: true,
      loop: true,
      breakpoints: {
        600: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 5,
          centeredSlides: true,
        },
        900: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 5,
          centeredSlides: true,
        },
        1200: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 5,
          centeredSlides: false,
        },
        1500: {
          slidesPerView: 5,
          slidesPerGroup: 5,
          spaceBetween: 5,
          centeredSlides: false,
        },
        1800: {
          slidesPerView: 5,
          slidesPerGroup: 6,
          spaceBetween: 5,
          centeredSlides: false,
        }
      }
    })
  }

  public setHoverMovie(movie: VideoContent) {
    this.selectedMovieContent = movie.title ?? movie.name
  }

  public clearHoverMovie() {
    this.selectedMovieContent = null
  }


}
