import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdCheckinInfoComponent } from './ad-checkin-info.component';

describe('AdCheckinInfoComponent', () => {
  let component: AdCheckinInfoComponent;
  let fixture: ComponentFixture<AdCheckinInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdCheckinInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdCheckinInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
