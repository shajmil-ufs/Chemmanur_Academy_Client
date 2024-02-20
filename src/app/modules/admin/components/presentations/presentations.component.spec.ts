import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { presentationsComponent } from './presentations.component';
describe('presentationsComponent', () => {
let component: presentationsComponent;
let fixture: ComponentFixture<presentationsComponent>;
beforeEach(async(() => {
TestBed.configureTestingModule({
declarations: [ presentationsComponent ]
})
.compileComponents();
}));
beforeEach(() => {
fixture = TestBed.createComponent(presentationsComponent);
component = fixture.componentInstance;
fixture.detectChanges();
});
it('should create', () => {
expect(component).toBeTruthy();
});
});

