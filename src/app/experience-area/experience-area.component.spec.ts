import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceAreaComponent } from './experience-area.component';

describe('ExperienceAreaComponent', () => {
  let component: ExperienceAreaComponent;
  let fixture: ComponentFixture<ExperienceAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienceAreaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExperienceAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
