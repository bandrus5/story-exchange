import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PostedStoryCardComponent } from "./posted-story-card.component";

describe("PostedStoryCardComponent", () => {
  let component: PostedStoryCardComponent;
  let fixture: ComponentFixture<PostedStoryCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PostedStoryCardComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostedStoryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
