import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';

// LSI 
import { InitialAnalysisLsiRequestComponent } from './lsi/request/initial-analysis-lsi-request.component';

const routes: Routes = [
  {
    path: 'lsi-request',
    component: InitialAnalysisLsiRequestComponent
  }, 
  {
    path: 'lsi-request/modify',
    component: InitialAnalysisLsiRequestComponent
  },
  {
    path: 'lsi-request/create',
    component: InitialAnalysisLsiRequestComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InitialAnalysisRoutingModule { }
