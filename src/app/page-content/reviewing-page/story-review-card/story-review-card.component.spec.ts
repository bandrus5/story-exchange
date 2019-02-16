import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryReviewCardComponent } from './story-review-card.component';

describe('StoryReviewCardComponent', () => {
  let component: StoryReviewCardComponent;
  let fixture: ComponentFixture<StoryReviewCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryReviewCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryReviewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
