import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { SharedModule } from 'src/app/shared/shared.module';
import { InitialAnalysisRoutingModule } from './initial-analysis-routing.module';
// import { WjNavModule } from '@grapecity/wijmo.angular2.nav'

// Services

import { MainScreenLinksComponent } from './common/main-screen-links/main-screen-links.component';

// Common Module
import { NavigationComponent } from '../../shared/navigation/navigation.component';
import { ModifyComponent } from './common/modify/modify.component';
import { CreateComponent } from './common/create/create.component';

// LSI Common Module
import { OutlineRequestComponent } from './common/outline-request/outline-request.component';
import { InformationReturnedSamplesComponent } from './common/information-returned-samples/information-returned-samples.component';
import { AttachedFileComponent } from './common/attached-file/attached-file.component';
import { RemarksComponent } from './common/remarks/remarks.component';
import { WorkflowComponent } from './common/workflow/workflow.component';
import { SelectDestinationRequestComponent } from './common/select-destination-request/select-destination-request.component';
import { EmailDestinationRequestComponent } from './common/email-destination-request/email-destination-request.component';
import { SelectDestinationAnalysisComponent } from './common/select-destination-analysis/select-destination-analysis.component';
import { EmailDestinationAnalysisComponent } from './common/email-destination-analysis/email-destination-analysis.component';
import { FooterComponent } from './common/footer/footer.component';

import { InitialAnalysisRequestComponent } from './request/initial-analysis-request.component';
import { InitialAnalysisAnswerComponent } from './answer/initial-analysis-answer.component';
import { InitialAnalysisApprovalComponent } from './approval/initial-analysis-approval.component';
import { WjGridMultirowModule } from '@grapecity/wijmo.angular2.grid.multirow';

// Common Module
import { InitialAnalysisFinalReportComponent } from './common/final-report/final-report.component';

@NgModule({
  imports: [
    WjGridMultirowModule,
    CommonModule,
    SharedModule,
    InitialAnalysisRoutingModule,

    MatTreeModule,
    MatIconModule, 
    MatButtonModule,
  ],
  declarations: [
    MainScreenLinksComponent,
    NavigationComponent,
    ModifyComponent,
    CreateComponent,
    OutlineRequestComponent,
    AttachedFileComponent,
    InformationReturnedSamplesComponent,
    RemarksComponent,
    WorkflowComponent,
    SelectDestinationRequestComponent,
    EmailDestinationRequestComponent,
    SelectDestinationAnalysisComponent,
    EmailDestinationAnalysisComponent,
    FooterComponent,

    InitialAnalysisRequestComponent,
    InitialAnalysisAnswerComponent,
    InitialAnalysisApprovalComponent,

    InitialAnalysisFinalReportComponent,
  ],
  
  exports: [
    OutlineRequestComponent,
    AttachedFileComponent,
    InformationReturnedSamplesComponent,
    RemarksComponent,
    WorkflowComponent,
    SelectDestinationRequestComponent,
    EmailDestinationRequestComponent,
    SelectDestinationAnalysisComponent,
    EmailDestinationAnalysisComponent,
    FooterComponent,

    
    
    
  ], 

  providers: [ 
  ],

  bootstrap: [NavigationComponent],
})
export class InitialAnalysisModule { }
