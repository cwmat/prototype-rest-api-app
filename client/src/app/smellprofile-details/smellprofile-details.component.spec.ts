import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmellprofileDetailsComponent } from './smellprofile-details.component';

describe('SmellprofileDetailsComponent', () => {
  let component: SmellprofileDetailsComponent;
  let fixture: ComponentFixture<SmellprofileDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmellprofileDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmellprofileDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
