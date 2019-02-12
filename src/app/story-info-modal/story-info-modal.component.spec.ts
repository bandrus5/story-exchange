import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryInfoModalComponent } from './story-info-modal.component';

describe('StoryInfoModalComponent', () => {
  let component: StoryInfoModalComponent;
  let fixture: ComponentFixture<StoryInfoModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryInfoModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryInfoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
