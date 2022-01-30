import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from 'src/app/data/service/navigation.service';

@Component({
    selector: 'app-initial-analysis-request',
    templateUrl: './initial-analysis-request.component.html',
    styleUrls: ['./initial-analysis-request.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class InitialAnalysisRequestComponent implements OnInit {

    constructor(private navigationService: NavigationService, private router: Router) { }
  
    ngOnInit(): void {
        if(this.router.url.includes('modify')){
            this.navigationService.showModifyDialog();
        }
    
        if(this.router.url.includes('create')){
            this.navigationService.showCreateDialog();
        }
    }
    
    showNavigationDialog() {
        this.navigationService.showNavigationDialog()
    }
  }
  
