import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkriptComponent } from './Skript.component';

describe('SkriptComponent', () => {
  let component: SkriptComponent;
  let fixture: ComponentFixture<SkriptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkriptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
