import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SurveyRoutingModule } from './survey-routing.module';
import { SurveyComponent } from './survey.component';
import { SharedModule } from '../shared/shared.module';
import { NgParticlesModule } from 'ng-particles';


@NgModule({
  declarations: [
    SurveyComponent
  ],
  imports: [
    CommonModule, SurveyRoutingModule, SharedModule, NgParticlesModule
  ]
})
export class SurveyModule { }
