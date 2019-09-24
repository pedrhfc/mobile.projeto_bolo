import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfiterolesPage } from './profiteroles.page';

describe('ProfiterolesPage', () => {
  let component: ProfiterolesPage;
  let fixture: ComponentFixture<ProfiterolesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfiterolesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfiterolesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
