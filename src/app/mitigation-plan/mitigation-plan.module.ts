import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

import { MitigationPlanRoutingModule } from './mitigation-plan-routing.module';
import { MitigationPlanComponent } from './mitigation-plan.component';
import { SharedModule } from '../shared/shared.module';
import { SkillPickListComponent } from './skill-pick-list/skill-pick-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [MitigationPlanComponent, SkillPickListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatChipsModule,
    MatSelectModule,
    MatIconModule,
    MitigationPlanRoutingModule,
    SharedModule,
  ],
})
export class MitigationPlanModule {}
