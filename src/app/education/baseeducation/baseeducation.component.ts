import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EducationResolved } from '../../core/models/Education';

@Component({
  selector: 'app-baseeducation',
  templateUrl: './baseeducation.component.html',
  styleUrls: ['./baseeducation.component.scss']
})
export class BaseeducationComponent implements OnInit {
  education: EducationResolved;
  homeBanner = '/assets/banner.svg';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.data.subscribe(data => this.education = data.education);
  }

}
