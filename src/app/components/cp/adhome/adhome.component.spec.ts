import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdhomeComponent } from './adhome.component';

describe('AdhomeComponent', () => {
  let component: AdhomeComponent;
  let fixture: ComponentFixture<AdhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
