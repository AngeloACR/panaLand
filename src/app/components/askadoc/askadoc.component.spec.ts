/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AskadocComponent } from './askadoc.component';

describe('AskadocComponent', () => {
  let component: AskadocComponent;
  let fixture: ComponentFixture<AskadocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AskadocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AskadocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
