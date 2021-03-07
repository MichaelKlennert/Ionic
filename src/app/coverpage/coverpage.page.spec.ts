import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverpagePage } from './coverpage.page';

describe('CoverpagePage', () => {
  let component: CoverpagePage;
  let fixture: ComponentFixture<CoverpagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoverpagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoverpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
