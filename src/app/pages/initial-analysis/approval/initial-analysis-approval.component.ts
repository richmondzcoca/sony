import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NavigationService } from 'src/app/data/service/navigation.service';


@Component({
    selector: 'app-initial-analysis-approval',
    templateUrl: './initial-analysis-approval.component.html',
    styleUrls: ['./initial-analysis-approval.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class InitialAnalysisApprovalComponent implements OnInit {

    constructor(private navigationService: NavigationService) { }
  
    ngOnInit(): void {
    }

    showNavigationDialog() {
        this.navigationService.showNavigationDialog()
    }
  
  }
  
