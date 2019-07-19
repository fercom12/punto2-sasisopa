import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetasobjetivosPage } from './metasobjetivos.page';

describe('MetasobjetivosPage', () => {
  let component: MetasobjetivosPage;
  let fixture: ComponentFixture<MetasobjetivosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetasobjetivosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetasobjetivosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
