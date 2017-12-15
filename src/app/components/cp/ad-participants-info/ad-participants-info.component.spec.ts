import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdParticipantsInfoComponent } from './ad-participants-info.component';

describe('AdParticipantsInfoComponent', () => {
  let component: AdParticipantsInfoComponent;
  let fixture: ComponentFixture<AdParticipantsInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdParticipantsInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdParticipantsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
