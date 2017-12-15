import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdOverviewComponent } from './ad-overview.component';

describe('AdOverviewComponent', () => {
  let component: AdOverviewComponent;
  let fixture: ComponentFixture<AdOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
