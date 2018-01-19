import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdTimeUpdateComponent } from './ad-time-update.component';

describe('AdTimeUpdateComponent', () => {
  let component: AdTimeUpdateComponent;
  let fixture: ComponentFixture<AdTimeUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdTimeUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdTimeUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
