import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParisBrestPage } from './paris_brest.page';

describe('ParisBrestPage', () => {
  let component: ParisBrestPage;
  let fixture: ComponentFixture<ParisBrestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParisBrestPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParisBrestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
