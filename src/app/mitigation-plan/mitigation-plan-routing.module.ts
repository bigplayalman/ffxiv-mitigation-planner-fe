import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MitigationPlanComponent } from './mitigation-plan.component';

const routes: Routes = [{ path: '', component: MitigationPlanComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MitigationPlanRoutingModule { }
