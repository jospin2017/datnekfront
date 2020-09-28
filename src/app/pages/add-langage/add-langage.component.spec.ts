import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLangageComponent } from './add-langage.component';

describe('AddLangageComponent', () => {
  let component: AddLangageComponent;
  let fixture: ComponentFixture<AddLangageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLangageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLangageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
