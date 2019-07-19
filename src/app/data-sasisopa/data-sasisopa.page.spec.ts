import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSASISOPAPage } from './data-sasisopa.page';

describe('DataSASISOPAPage', () => {
  let component: DataSASISOPAPage;
  let fixture: ComponentFixture<DataSASISOPAPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataSASISOPAPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataSASISOPAPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
