import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  skills = {
    1: {
      name: 'Reprisal',
      magic: 10,
      physical: 10,
      duration: 8,
      cooldown: 90,
      jobs: {
        war: true,
        drk: true,
        dnb: true,
        pld: true
      }
    },
    2: {
      name: 'Rampart',
      magic: 20,
      physical: 20,
      duration: 20,
      cooldown: 90,
      jobs: {
        war: true,
        drk: true,
        dnb: true,
        pld: true
      }
    },
    3: {
      name: 'Feint',
      magic: 5,
      physical: 10,
      duration: 10,
      cooldown: 90,
      jobs: {
        sam: true,
        nin: true,
        drg: true,
      }
    }

  }
  constructor() { }
}
