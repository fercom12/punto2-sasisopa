import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequisitoslegalesPage } from './requisitoslegales.page';

describe('RequisitoslegalesPage', () => {
  let component: RequisitoslegalesPage;
  let fixture: ComponentFixture<RequisitoslegalesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequisitoslegalesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequisitoslegalesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
