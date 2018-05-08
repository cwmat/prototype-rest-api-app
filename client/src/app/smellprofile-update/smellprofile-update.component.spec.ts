import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmellprofileUpdateComponent } from './smellprofile-update.component';

describe('SmellprofileUpdateComponent', () => {
  let component: SmellprofileUpdateComponent;
  let fixture: ComponentFixture<SmellprofileUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmellprofileUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmellprofileUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
