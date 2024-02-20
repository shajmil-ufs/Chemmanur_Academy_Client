import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { questionsComponent } from './questions.component';
describe('questionsComponent', () => {
let component: questionsComponent;
let fixture: ComponentFixture<questionsComponent>;
beforeEach(async(() => {
TestBed.configureTestingModule({
declarations: [ questionsComponent ]
})
.compileComponents();
}));
beforeEach(() => {
fixture = TestBed.createComponent(questionsComponent);
component = fixture.componentInstance;
fixture.detectChanges();
});
it('should create', () => {
expect(component).toBeTruthy();
});
});

