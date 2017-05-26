import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagenotfound0Component } from './pagenotfound0.component';

describe('Pagenotfound0Component', () => {
  let component: Pagenotfound0Component;
  let fixture: ComponentFixture<Pagenotfound0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pagenotfound0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pagenotfound0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
