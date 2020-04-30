import { map } from "rxjs/operators";
import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../services/auth.service";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  constructor(private loginService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    // Cách 1 làm kiểu nông dân
    if (this.loginService.usestated) {
      return true;
    }
    this.router.navigate(["/signin"], {
      queryParams: { returnUrl: state.url },
    });
    return false;

    // Cách 2 làm kiểu người máy

    // return this.loginService.isSingnedInStream.map<Boolean, Boolean>(
    //   (isSignin: boolean) => {
    //     if (!isSignin) {
    //       this.router.navigate(["/signin"]);
    //     }
    //     return isSignin;
    //   }
    // );
  }
}
