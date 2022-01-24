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
import { OutlineRequestLsiComponent } from './common/outline-request/lsi/outline-request-lsi.component';
import { InformationReturnedSamplesLsiComponent } from './common/information-returned-samples/lsi/information-returned-samples-lsi.component';
import { AttachedFileLsiComponent } from './common/attached-file/lsi/attached-file-lsi.component';
import { RemarksLsiComponent } from './common/remarks/lsi/remarks-lsi.component';
import { WorkflowLsiComponent } from './common/workflow/lsi/workflow-lsi.component';
import { SelectDestinationRequestLsiComponent } from './common/select-destination-request/lsi/select-destination-request-lsi.component';
import { EmailDestinationRequestLsiComponent } from './common/email-destination-request/lsi/email-destination-request-lsi.component';
import { SelectDestinationAnalysisLsiComponent } from './common/select-destination-analysis/lsi/select-destination-analysis-lsi.component';
import { EmailDestinationAnalysisLsiComponent } from './common/email-destination-analysis/lsi/email-destination-analysis-lsi.component';
import { FooterLsiComponent } from './common/footer/lsi/footer-lsi.component';

// LSI
import { InitialAnalysisLsiRequestComponent } from './lsi/request/initial-analysis-lsi-request.component';
import { WjGridMultirowModule } from '@grapecity/wijmo.angular2.grid.multirow';

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
    OutlineRequestLsiComponent,
    InformationReturnedSamplesLsiComponent,
    AttachedFileLsiComponent,
    RemarksLsiComponent,
    WorkflowLsiComponent,
    SelectDestinationRequestLsiComponent,
    EmailDestinationRequestLsiComponent,
    SelectDestinationAnalysisLsiComponent,
    EmailDestinationAnalysisLsiComponent,
    FooterLsiComponent,

    InitialAnalysisLsiRequestComponent,
    InitialAnalysisFinalReportComponent,
  ],
  
  exports: [
    OutlineRequestLsiComponent,
    InformationReturnedSamplesLsiComponent,
    AttachedFileLsiComponent,
    RemarksLsiComponent,
    WorkflowLsiComponent,
    SelectDestinationRequestLsiComponent,
    EmailDestinationRequestLsiComponent,
    SelectDestinationAnalysisLsiComponent,
    EmailDestinationAnalysisLsiComponent,
    FooterLsiComponent,
  ], 

  providers: [ 
  ],

  bootstrap: [NavigationComponent],
})
export class InitialAnalysisModule { }
