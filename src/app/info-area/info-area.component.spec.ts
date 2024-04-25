import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoAreaComponent } from './info-area.component';

describe('InfoAreaComponent', () => {
  let component: InfoAreaComponent;
  let fixture: ComponentFixture<InfoAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoAreaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
