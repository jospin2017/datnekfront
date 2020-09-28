import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLangageComponent } from './list-langage.component';

describe('ListLangageComponent', () => {
  let component: ListLangageComponent;
  let fixture: ComponentFixture<ListLangageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLangageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLangageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
