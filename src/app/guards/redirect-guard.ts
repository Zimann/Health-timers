import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import {LocalStorageService} from '../services/local-storage.service';
import {Observable} from 'rxjs';
import {LocalStorageKeys} from '../shared/models/localStorageKeys';
import {Injectable} from '@angular/core';
import Routes from '../shared/routes/routes';

@Injectable({providedIn: 'root'})

export class RedirectGuard implements CanActivate {

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.localStorageService.getItem(LocalStorageKeys.TOKEN_EXPIRY)) {
      this.router.navigate([Routes.HOME]);
    } else {
      return true;
    }
  }
}
