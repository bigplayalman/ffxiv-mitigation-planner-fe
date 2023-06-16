import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillPickListComponent } from './skill-pick-list.component';

describe('SkillPickListComponent', () => {
  let component: SkillPickListComponent;
  let fixture: ComponentFixture<SkillPickListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillPickListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillPickListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
