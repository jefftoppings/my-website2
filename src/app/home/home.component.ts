import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  experiencedSkills: string[] = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Angular', 'RxJs', 'Python', 'Java',
    'Git Version Control'];
  proficientSkills: string[] = ['GoLang', 'Haskell', 'Google Cloud Platform', 'SQL', 'KnockoutJs', 'Android'];

  constructor() {
  }

  ngOnInit() {
  }

}
