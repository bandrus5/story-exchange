import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourStoriesPageComponent } from './your-stories-page.component';

describe('YourStoriesPageComponent', () => {
  let component: YourStoriesPageComponent;
  let fixture: ComponentFixture<YourStoriesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourStoriesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourStoriesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
