import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewingPageComponent } from './reviewing-page.component';

describe('ReviewingPageComponent', () => {
  let component: ReviewingPageComponent;
  let fixture: ComponentFixture<ReviewingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReviewingPageComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
