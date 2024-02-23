import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Eligibility_CriteriaComponent } from './eligibility_criteria.component';

describe('ExamTypesComponent', () => {
  let component: Eligibility_CriteriaComponent;
  let fixture: ComponentFixture<Eligibility_CriteriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Eligibility_CriteriaComponent]
    });
    fixture = TestBed.createComponent(Eligibility_CriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
