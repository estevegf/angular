import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-baseeducation',
  templateUrl: './baseeducation.component.html',
  styleUrls: ['./baseeducation.component.scss']
})
export class BaseeducationComponent implements OnInit {
  stars: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => this.stars = data.stars.stargazers_count);
  }

}
