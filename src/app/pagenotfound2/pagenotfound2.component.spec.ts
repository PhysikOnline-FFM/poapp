import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagenotfound2Component } from './pagenotfound2.component';

describe('Pagenotfound2Component', () => {
  let component: Pagenotfound2Component;
  let fixture: ComponentFixture<Pagenotfound2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pagenotfound2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pagenotfound2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
