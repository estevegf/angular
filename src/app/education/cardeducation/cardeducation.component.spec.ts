import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardeducationComponent } from './cardeducation.component';

describe('CardeducationComponent', () => {
  let component: CardeducationComponent;
  let fixture: ComponentFixture<CardeducationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardeducationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardeducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
