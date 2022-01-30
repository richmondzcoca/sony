import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NavigationService } from 'src/app/data/service/navigation.service';


@Component({
    selector: 'app-initial-analysis-answer',
    templateUrl: './initial-analysis-answer.component.html',
    styleUrls: ['./initial-analysis-answer.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class InitialAnalysisAnswerComponent implements OnInit {

    constructor(private navigationService: NavigationService) { }
  
    ngOnInit(): void {
    }

    showNavigationDialog() {
        this.navigationService.showNavigationDialog()
    }
  
  }
  
