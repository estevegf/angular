import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { EducationResolved } from '../../core/models/Education';

@Component({
  selector: 'app-baseeducation',
  templateUrl: './baseeducation.component.html',
  styleUrls: ['./baseeducation.component.scss']
})
export class BaseeducationComponent implements OnInit {
  education: EducationResolved;
  educationBanner = '/assets/banner_education-1920.webp';

  constructor(private route: ActivatedRoute, private titleService: Title ) {
    this.titleService.setTitle('Education - Angular');
  }

  ngOnInit() {

    this.route.data.subscribe(data => this.education = data.education);
  }

}
