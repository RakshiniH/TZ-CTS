import { ComponentFixture, TestBed } from '@angular/core/testing';
// 1. Ensure the import name matches the class name in the component file
import { DashboardComponent } from './dashboard.component'; 

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // 2. Since it is a Standalone component, it goes in imports, not declarations
      imports: [DashboardComponent], 
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    // 3. Use fixture.detectChanges() instead of whenStable() for basic creation tests
    fixture.detectChanges(); 
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});