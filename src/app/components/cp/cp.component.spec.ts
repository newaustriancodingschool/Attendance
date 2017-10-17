/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CpComponent } from './cp.component';

describe('CpComponent', () => {
  let component: CpComponent;
  let fixture: ComponentFixture<CpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
