import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmellprofileMapComponent } from './smellprofile-map.component';

describe('SmellprofileMapComponent', () => {
  let component: SmellprofileMapComponent;
  let fixture: ComponentFixture<SmellprofileMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmellprofileMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmellprofileMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
