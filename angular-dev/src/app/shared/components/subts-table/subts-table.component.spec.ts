import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtsTableComponent } from './subts-table.component';

describe('SubtsTableComponent', () => {
  let component: SubtsTableComponent;
  let fixture: ComponentFixture<SubtsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubtsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubtsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
