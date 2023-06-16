import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-skill-pick-list',
  templateUrl: './skill-pick-list.component.html',
  styleUrls: ['./skill-pick-list.component.scss']
})
export class SkillPickListComponent {
  skillControl = new FormControl<string[]>([]);
  skillList: string[] = ['Reprisal', 'Rampart']

  onSkillRemove(skill: string) {}
}
