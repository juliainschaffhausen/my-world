import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeTogglerComponentComponent } from './theme-toggler-component.component';

describe('ThemeTogglerComponentComponent', () => {
  let component: ThemeTogglerComponentComponent;
  let fixture: ComponentFixture<ThemeTogglerComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemeTogglerComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThemeTogglerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
