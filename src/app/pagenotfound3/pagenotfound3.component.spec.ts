import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagenotfound3Component } from './pagenotfound3.component';

describe('Pagenotfound3Component', () => {
  let component: Pagenotfound3Component;
  let fixture: ComponentFixture<Pagenotfound3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pagenotfound3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pagenotfound3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
