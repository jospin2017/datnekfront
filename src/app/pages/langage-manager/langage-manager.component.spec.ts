import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LangageManagerComponent } from './langage-manager.component';

describe('LangageManagerComponent', () => {
  let component: LangageManagerComponent;
  let fixture: ComponentFixture<LangageManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LangageManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LangageManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
