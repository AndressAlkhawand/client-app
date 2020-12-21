import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AboutUsResolver implements Resolve<any> {
    constructor() {

    }

    async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    }
}