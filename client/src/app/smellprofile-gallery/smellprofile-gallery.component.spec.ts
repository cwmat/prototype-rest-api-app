import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmellprofileGalleryComponent } from './smellprofile-gallery.component';

describe('SmellprofileGalleryComponent', () => {
  let component: SmellprofileGalleryComponent;
  let fixture: ComponentFixture<SmellprofileGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmellprofileGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmellprofileGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
