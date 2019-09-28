import {Component, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  experiencedSkills: string[] = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Angular', 'RxJs', 'Python', 'Java',
    'Git Version Control'];
  proficientSkills: string[] = ['GoLang', 'Haskell', 'Google Cloud Platform', 'SQL', 'KnockoutJs', 'Android'];
  isHandset$: Observable<boolean>;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.isHandset$ = this.breakpointObserver.observe(Breakpoints.Handset)
      .pipe(
        map(result => result.matches),
        shareReplay()
      );
  }

}
