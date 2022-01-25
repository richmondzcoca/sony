import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';

import { InitialAnalysisRequestComponent } from './index/initial-analysis.component';

const routes: Routes = [
  {
    path: '',
    component: InitialAnalysisRequestComponent
  }, 
  {
    path: 'modify',
    component: InitialAnalysisRequestComponent
  },
  {
    path: 'create',
    component: InitialAnalysisRequestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InitialAnalysisRoutingModule { }
