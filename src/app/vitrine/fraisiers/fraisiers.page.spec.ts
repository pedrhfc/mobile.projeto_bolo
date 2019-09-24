import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FraisiersPage } from './fraisiers.page';

describe('FraisiersPage', () => {
  let component: FraisiersPage;
  let fixture: ComponentFixture<FraisiersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FraisiersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FraisiersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
