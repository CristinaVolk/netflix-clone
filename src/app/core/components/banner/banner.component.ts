import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {
  // "https://www.youtube.com/embed/rhjlrA7VYD0?autoplay=1&mute=1&loop=1"
  public videoUrl = "https://www.youtube.com/embed/7UQRJ3q-7Qc?autoplay=1&mute=1&loop=1"
  public bannerTitle: string = 'Animal'
  public bannerOverview: string = 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur in recusandae saepe? Quas quisquam, recusandae.'

}
