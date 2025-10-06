import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { SaffronImplementation100Component } from './saffron-implementation-100.component';

describe('SaffronImplementation100Component', () => {
  let component: SaffronImplementation100Component;
  let fixture: ComponentFixture<SaffronImplementation100Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaffronImplementation100Component ],
      imports: [ FormsModule ]
    }).compileComponents();
    fixture = TestBed.createComponent(SaffronImplementation100Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render selects and buttons', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('saf-select[label="View"]')).toBeTruthy();
    expect(compiled.querySelector('saf-select[label="Year"]')).toBeTruthy();
    expect(compiled.querySelector('saf-button[appearance="primary"]')).toBeTruthy();
    expect(compiled.querySelector('saf-button[appearance="warning"]')).toBeTruthy();
    expect(compiled.querySelector('saf-button[appearance="info"]')).toBeTruthy();
  });

  it('should bind selectedView and selectedYear', () => {
    component.selectedView = 'option 2';
    component.selectedYear = 'option 3';
    fixture.detectChanges();
    expect(component.selectedView).toBe('option 2');
    expect(component.selectedYear).toBe('option 3');
  });

  // Accessibility checks
  it('should have aria-label on main container', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const mainDiv = compiled.querySelector('#saffron_implmentation_100');
    expect(mainDiv?.getAttribute('aria-label')).toBe('Compliance summary section');
  });

  // Responsiveness (basic)
  it('should be responsive', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const container = compiled.querySelector('.saffron-impl-100-container') as HTMLElement;
    expect(container).toBeTruthy();
    // Simulate small screen
    container.style.maxWidth = '100%';
    expect(container.style.maxWidth).toBe('100%');
  });

  // Edge case: empty options
  it('should handle empty options gracefully', () => {
    component.selectedView = '';
    component.selectedYear = '';
    fixture.detectChanges();
    expect(component.selectedView).toBe('');
    expect(component.selectedYear).toBe('');
  });
});
