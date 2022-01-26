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

// LSI
import { InitialAnalysisLsiRequestComponent } from './lsi/request/initial-analysis-lsi-request.component';
import { InitialAnalysisLsiAnswerComponent } from './lsi/answer/initial-analysis-lsi-answer.component';
import { InitialAnalysisLsiApprovalComponent } from './lsi/approval/initial-analysis-lsi-approval.component';
import { WjGridMultirowModule } from '@grapecity/wijmo.angular2.grid.multirow';

// IS
import { InitialAnalysisIsRequestComponent } from './is/request/initial-analysis-is-request.component';
import { InitialAnalysisIsAnswerComponent } from './is/answer/initial-analysis-is-answer.component';
import { InitialAnalysisIsApprovalComponent } from './is/approval/initial-analysis-is-approval.component';

// MDD SubScreens
import { InitialAnalysisMddRequestComponent } from './mdd/request/initial-analysis-mdd-request.component';
import { InitialAnalysisMddAnswerComponent } from './mdd/answer/initial-analysis-mdd-answer.component';
import { InitialAnalysisMddApprovalComponent } from './mdd/approval/initial-analysis-mdd-approval.component';

// Laser Common Module
import { InitialAnalysisFinalReportComponent } from './common/final-report/final-report.component';

// Laser subscreens
import { InitialAnalysisLaserRequestComponent } from './laser/request/initial-analysis-laser-request.component';
import { InitialAnalysisLaserAnswerComponent } from './laser/answer/initial-analysis-laser-answer.component'; 
import { InitialAnalysisLaserApprovalComponent } from './laser/approval/initial-analysis-laser-approval.component';

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

    InitialAnalysisLsiRequestComponent,
    InitialAnalysisLsiAnswerComponent,
    InitialAnalysisLsiApprovalComponent,

    InitialAnalysisIsRequestComponent,
    InitialAnalysisIsAnswerComponent,
    InitialAnalysisIsApprovalComponent,
    
    InitialAnalysisMddRequestComponent,
    InitialAnalysisMddAnswerComponent,
    InitialAnalysisMddApprovalComponent,

    InitialAnalysisFinalReportComponent,

    InitialAnalysisLaserRequestComponent,
    InitialAnalysisLaserAnswerComponent,
    InitialAnalysisLaserApprovalComponent,
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
