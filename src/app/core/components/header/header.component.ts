import {Component, inject, Input, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {AuthService} from "../../services/auth.service";
import {MoviesService} from "../../services/movies.service";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input({required: true}) userImg: string = ''
  @Input({required: true}) userName: string = ''

  private auth = inject(AuthService)
  public navItems = ["Home", "TV Shows", "My List", "Browse by Language"]

  public signOut() {
    this.auth.signOut()
  }
}
