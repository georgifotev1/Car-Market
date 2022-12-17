import { Injectable } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { AuthService } from 'src/app/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class CanUpdate implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private apiService: ApiService
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    this.apiService.loadCarById(route.params['id']).subscribe((res) => {
      if (res._ownerId !== sessionStorage.getItem('userId')) {
        this.router.navigate([`/catalog/${route.params['id']}`]);
        return false;
      } else {
        return true;
      }
    });
    return true;
  }
}
