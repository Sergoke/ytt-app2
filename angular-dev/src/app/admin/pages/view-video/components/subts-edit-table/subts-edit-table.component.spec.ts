import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtsEditTableComponent } from './subts-edit-table.component';

describe('SubtsEditTableComponent', () => {
  let component: SubtsEditTableComponent;
  let fixture: ComponentFixture<SubtsEditTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubtsEditTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubtsEditTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
