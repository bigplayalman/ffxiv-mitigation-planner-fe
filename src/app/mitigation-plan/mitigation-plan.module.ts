import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MitigationPlanRoutingModule } from './mitigation-plan-routing.module';
import { MitigationPlanComponent } from './mitigation-plan.component';


@NgModule({
  declarations: [
    MitigationPlanComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MitigationPlanRoutingModule
  ]
})
export class MitigationPlanModule { }
