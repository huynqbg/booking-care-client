/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserReduxComponent } from './user-redux.component';

describe('UserReduxComponent', () => {
  let component: UserReduxComponent;
  let fixture: ComponentFixture<UserReduxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserReduxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserReduxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
