import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { faHashtag } from '@fortawesome/free-solid-svg-icons';
import { faSchool } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnDestroy, OnInit {
  mobileQuery: MediaQueryList;
  instagram = faHashtag;
  facebook = faSchool;
  private _mobileQueryListener: () => void;
  name: any;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
     media: MediaMatcher,
     public router: Router,
     public route: ActivatedRoute,
     ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  public search(): void {
    
  }

  public navigate(destination: string): void {
    this.router.navigate(['about-us'], {relativeTo: this.route});
  }

}
