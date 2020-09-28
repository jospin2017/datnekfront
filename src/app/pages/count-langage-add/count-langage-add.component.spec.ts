import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountLangageAddComponent } from './count-langage-add.component';

describe('CountLangageAddComponent', () => {
  let component: CountLangageAddComponent;
  let fixture: ComponentFixture<CountLangageAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountLangageAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountLangageAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
