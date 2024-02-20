import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { student_question_bankComponent } from './student_question_bank.component';
describe('student_question_bankComponent', () => {
let component: student_question_bankComponent;
let fixture: ComponentFixture<student_question_bankComponent>;
beforeEach(async(() => {
TestBed.configureTestingModule({
declarations: [ student_question_bankComponent ]
})
.compileComponents();
}));
beforeEach(() => {
fixture = TestBed.createComponent(student_question_bankComponent);
component = fixture.componentInstance;
fixture.detectChanges();
});
it('should create', () => {
expect(component).toBeTruthy();
});
});

