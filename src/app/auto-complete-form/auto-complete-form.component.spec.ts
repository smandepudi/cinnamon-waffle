import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoCompleteFormComponent } from './auto-complete-form.component';

describe('AutoCompleteFormComponent', () => {
  let component: AutoCompleteFormComponent;
  let fixture: ComponentFixture<AutoCompleteFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoCompleteFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoCompleteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
