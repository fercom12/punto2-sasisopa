import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeligrosyriesgosPage } from './peligrosyriesgos.page';

describe('PeligrosyriesgosPage', () => {
  let component: PeligrosyriesgosPage;
  let fixture: ComponentFixture<PeligrosyriesgosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeligrosyriesgosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeligrosyriesgosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
