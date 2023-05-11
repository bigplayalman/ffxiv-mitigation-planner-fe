import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MitigationPlanComponent } from './mitigation-plan.component';

describe('MitigationPlanComponent', () => {
  let component: MitigationPlanComponent;
  let fixture: ComponentFixture<MitigationPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MitigationPlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MitigationPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
