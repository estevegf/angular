import { Component, Input, OnInit } from '@angular/core';
import { Education } from '../../core/models/Education';

@Component({
  selector: 'app-cardeducation',
  templateUrl: './cardeducation.component.html',
  styleUrls: ['./cardeducation.component.scss']
})
export class CardeducationComponent implements OnInit {
  @Input() education: Education;

  constructor() { }

  ngOnInit() {
  }

}
