import { Component } from '@angular/core';

@Component({
  selector: 'app-mitigation-plan',
  templateUrl: './mitigation-plan.component.html',
  styleUrls: ['./mitigation-plan.component.scss'],
})
export class MitigationPlanComponent {
  headers = [
    'Time', 'Action', 'Type', 'Hit'
  ]
  jobs = [
    "WAR", "PLD", "WHM", "SGE", "DRG", "MNK", "SMN", "BRD"
  ];

  mechanics = [
    {
      start: 0,
      end: 10,
      name: 'test mechanic',
      type: 'magic',
      hit: 76000,
      skills: [
        {
          job: 'WAR',
          skill: 1
        }
      ]
    }
  ]
}
