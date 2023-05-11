import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalcDurationPipe } from './pipes/calc-duration.pipe';



@NgModule({
  declarations: [
    CalcDurationPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CalcDurationPipe
  ]
})
export class SharedModule { }
