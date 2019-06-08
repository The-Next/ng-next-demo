import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdataownerComponent } from './updataowner.component';

describe('UpdataownerComponent', () => {
  let component: UpdataownerComponent;
  let fixture: ComponentFixture<UpdataownerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdataownerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdataownerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
