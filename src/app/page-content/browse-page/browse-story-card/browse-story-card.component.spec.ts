import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseStoryCardComponent } from './browse-story-card.component';

describe('BrowseStoryCardComponent', () => {
  let component: BrowseStoryCardComponent;
  let fixture: ComponentFixture<BrowseStoryCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BrowseStoryCardComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseStoryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
