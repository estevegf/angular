import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-basehome',
  templateUrl: './basehome.component.html',
  styleUrls: ['./basehome.component.scss']
})
export class BasehomeComponent implements OnInit {
  homeBanner = '/assets/banner_home.jpg';
  experienceOne = '/assets/experience-funitec.svg';
  experienceTwo = '/assets/experience-uniks.svg';

  constructor(private titleService: Title ) {
    this.titleService.setTitle('Home - Angular');
  }

  ngOnInit() {
  }

}
