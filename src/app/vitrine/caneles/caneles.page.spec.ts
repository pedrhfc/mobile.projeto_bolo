import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanelesPage } from './caneles.page';

describe('CanelesPage', () => {
  let component: CanelesPage;
  let fixture: ComponentFixture<CanelesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanelesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanelesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
