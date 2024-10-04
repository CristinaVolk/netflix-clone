import {Component, inject, Input, OnChanges, SimpleChanges} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent implements OnChanges {
  @Input({required: true}) bannerTitle: string = ''
  @Input() bannerOverview: string = ''
  @Input() key: string = ''
  private sanitizer = inject(DomSanitizer)
  public videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.key}?autoplay=1&mute=1&loop=1`)

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['key']) {
     this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.key}?autoplay=1&mute=1&loop=1`)
    }
  }
}
