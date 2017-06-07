import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTestComponent } from './home-test.component';

describe('HomeTestComponent', () => {
  let component: HomeTestComponent;
  let fixture: ComponentFixture<HomeTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
