import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { student_examsComponent } from './student_exams.component';
describe('student_examsComponent', () => {
let component: student_examsComponent;
let fixture: ComponentFixture<student_examsComponent>;
beforeEach(async(() => {
TestBed.configureTestingModule({
declarations: [ student_examsComponent ]
})
.compileComponents();
}));
beforeEach(() => {
fixture = TestBed.createComponent(student_examsComponent);
component = fixture.componentInstance;
fixture.detectChanges();
});
it('should create', () => {
expect(component).toBeTruthy();
});
});

