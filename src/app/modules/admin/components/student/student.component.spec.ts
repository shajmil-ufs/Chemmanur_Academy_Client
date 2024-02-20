import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { studentComponent } from './student.component';
describe('studentComponent', () => {
let component: studentComponent;
let fixture: ComponentFixture<studentComponent>;
beforeEach(async(() => {
TestBed.configureTestingModule({
declarations: [ studentComponent ]
})
.compileComponents();
}));
beforeEach(() => {
fixture = TestBed.createComponent(studentComponent);
component = fixture.componentInstance;
fixture.detectChanges();
});
it('should create', () => {
expect(component).toBeTruthy();
});
});

