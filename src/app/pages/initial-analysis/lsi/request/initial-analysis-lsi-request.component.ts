import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NavigationComponent } from 'src/app/shared/navigation/navigation.component'; 
import { ModifyComponent } from '../../common/modify/modify.component';
import { CreateComponent } from '../../common/create/create.component';
import { Router } from '@angular/router';

@Component({
    selector: 'app-initial-analysis-lsi-request',
    templateUrl: './initial-analysis-lsi-request.component.html',
    styleUrls: ['./initial-analysis-lsi-request.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class InitialAnalysisLsiRequestComponent implements OnInit {

    constructor(private dialog: MatDialog, private router: Router) { }
  
    ngOnInit(): void {
        console.log("this.router.url: ",this.router.url);
        // console.log(window.location.pathname)
        if(this.router.url === "/initial-analysis/lsi-request/modify"){
            this.showModifyDialog();
        }

        if(this.router.url === "/initial-analysis/lsi-request/create"){
            this.showCreateDialog();
        }
    }

    showCreateDialog() {
        const popup = this.dialog.open(CreateComponent, {
            width: '600px',
         }).componentInstance;
    }

    showModifyDialog() {
        const popup = this.dialog.open(ModifyComponent, {
            width: '600px',
         }).componentInstance;
    }
    
    showNavigationDialog() {
        console.log('<<<<<<<< test >>>>>>>')
        const popup = this.dialog.open(NavigationComponent, {
            width: '600px',
         }).componentInstance;
    }
  }
  
