import { Component } from '@angular/core';

@Component({
  selector: 'app-mitigation-plan',
  templateUrl: './mitigation-plan.component.html',
  styleUrls: ['./mitigation-plan.component.scss'],
})
export class MitigationPlanComponent {
  rows = Array(3).fill(null); // Adjust the number of rows as needed
  items = Array(1200).fill(null);
}
