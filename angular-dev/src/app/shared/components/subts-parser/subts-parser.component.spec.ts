import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtsParserComponent } from './subts-parser.component';

describe('SubtsParserComponent', () => {
  let component: SubtsParserComponent;
  let fixture: ComponentFixture<SubtsParserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubtsParserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubtsParserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
