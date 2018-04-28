import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmellprofileListComponent } from './smellprofile-list.component';

describe('SmellprofileListComponent', () => {
  let component: SmellprofileListComponent;
  let fixture: ComponentFixture<SmellprofileListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmellprofileListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmellprofileListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
