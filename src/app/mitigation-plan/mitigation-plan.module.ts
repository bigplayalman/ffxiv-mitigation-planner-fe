import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { MitigationPlanRoutingModule } from './mitigation-plan-routing.module';
import { MitigationPlanComponent } from './mitigation-plan.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    MitigationPlanComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MitigationPlanRoutingModule,
    SharedModule
  ]
})
export class MitigationPlanModule { }
