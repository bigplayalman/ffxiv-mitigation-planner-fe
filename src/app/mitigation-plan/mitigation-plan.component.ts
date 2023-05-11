import { Component } from '@angular/core';

@Component({
  selector: 'app-mitigation-plan',
  templateUrl: './mitigation-plan.component.html',
  styleUrls: ['./mitigation-plan.component.scss'],
})
export class MitigationPlanComponent {
  rows = [
    {
      start: 0,
      duration: 10,
    },
    {
      start: 25,
      duration: 5,
    },
  ];
}
