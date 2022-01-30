import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';

import { InitialAnalysisRequestComponent } from './request/initial-analysis-request.component';
import { InitialAnalysisAnswerComponent } from './answer/initial-analysis-answer.component';
import { InitialAnalysisApprovalComponent } from './approval/initial-analysis-approval.component';


const routes: Routes = [
  {
    path: 'request',
    component: InitialAnalysisRequestComponent
  }, 
  {
    path: 'request/modify',
    component: InitialAnalysisRequestComponent
  },
  {
    path: 'request/create',
    component: InitialAnalysisRequestComponent
  }, 
  {
    path: 'answer',
    component: InitialAnalysisAnswerComponent
  }, 
  {
    path: 'approval', 
    component: InitialAnalysisApprovalComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InitialAnalysisRoutingModule { }
