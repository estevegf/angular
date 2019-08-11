import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasehomeComponent } from './basehome.component';

describe('BasehomeComponent', () => {
  let component: BasehomeComponent;
  let fixture: ComponentFixture<BasehomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasehomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasehomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
