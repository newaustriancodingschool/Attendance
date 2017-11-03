import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientcheckinComponent } from './clientcheckin.component';

describe('ClientcheckinComponent', () => {
  let component: ClientcheckinComponent;
  let fixture: ComponentFixture<ClientcheckinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientcheckinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientcheckinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
