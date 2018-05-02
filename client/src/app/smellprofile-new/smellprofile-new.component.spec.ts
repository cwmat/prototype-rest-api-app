import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmellprofileNewComponent } from './smellprofile-new.component';

describe('SmellprofileNewComponent', () => {
  let component: SmellprofileNewComponent;
  let fixture: ComponentFixture<SmellprofileNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmellprofileNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmellprofileNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
