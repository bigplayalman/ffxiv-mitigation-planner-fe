import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'mitigation-plan',
    loadChildren: () =>
      import('./mitigation-plan/mitigation-plan.module').then(
        (m) => m.MitigationPlanModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
