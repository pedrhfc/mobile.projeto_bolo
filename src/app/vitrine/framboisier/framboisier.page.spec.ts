import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FramboisierPage } from './framboisier.page';

describe('FramboisierPage', () => {
  let component: FramboisierPage;
  let fixture: ComponentFixture<FramboisierPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FramboisierPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FramboisierPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
