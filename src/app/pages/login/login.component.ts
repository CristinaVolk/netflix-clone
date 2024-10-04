import {Router} from "@angular/router";

declare var google: any

import {CommonModule} from "@angular/common";
import {Component, inject, OnInit} from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  private router: Router = inject(Router)

  ngOnInit(): void {
    google.accounts.id.initialize({
      client_id: '71898726508-fm408vt1ku33v566nqsm78ckqnnee3dh.apps.googleusercontent.com',
      callback: (response: any) => {
        this.handleLogin(response)
      }
    })

    google.accounts.id.renderButton(document.getElementById("google-btn"), {
      theme: 'filled_blue',
      size: 'large',
      shape: 'rectangle',
      width: 300
    })
  }

  public decodeToken(token: string) {
    return JSON.parse(atob(token.split(".")[1]))
  }

  handleLogin(response: any) {
    if (response) {
      const payload = this.decodeToken(response.credential)
      sessionStorage.setItem('loggedInUser', JSON.stringify(payload))
      this.router.navigate(['browse'])

    }
  }

}
