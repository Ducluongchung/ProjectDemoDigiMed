import { Resolve } from '@angular/router';
export class ProductResolver implements Resolve<any> {
  resolve(route: import('@angular/router').ActivatedRouteSnapshot, state: import('@angular/router').RouterStateSnapshot) {
   return route.paramMap.get('id');
  }
}
