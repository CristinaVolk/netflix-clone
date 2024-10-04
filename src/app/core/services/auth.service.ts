import {Router} from "@angular/router";

declare var google: any
import {Injectable, inject, Inject} from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(@Inject(Router) private router: Router) {}

  public signOut() {
    google.accounts.id.disableAutoSelect()
    this.router.navigate(['/'])
    sessionStorage.removeItem("loggedInUser")
  }

}
