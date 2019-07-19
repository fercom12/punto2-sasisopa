import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioiiPage } from './formularioii.page';

describe('FormularioiiPage', () => {
  let component: FormularioiiPage;
  let fixture: ComponentFixture<FormularioiiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioiiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioiiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
