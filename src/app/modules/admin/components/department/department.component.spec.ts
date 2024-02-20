import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { departmentComponent } from './department.component';
describe('departmentComponent', () => {
let component: departmentComponent;
let fixture: ComponentFixture<departmentComponent>;
beforeEach(async(() => {
TestBed.configureTestingModule({
declarations: [ departmentComponent ]
})
.compileComponents();
}));
beforeEach(() => {
fixture = TestBed.createComponent(departmentComponent);
component = fixture.componentInstance;
fixture.detectChanges();
});
it('should create', () => {
expect(component).toBeTruthy();
});
});

