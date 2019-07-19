import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequisitoslegalesProcedimientosPage } from './requisitoslegales-procedimientos.page';

describe('RequisitoslegalesProcedimientosPage', () => {
  let component: RequisitoslegalesProcedimientosPage;
  let fixture: ComponentFixture<RequisitoslegalesProcedimientosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequisitoslegalesProcedimientosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequisitoslegalesProcedimientosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
