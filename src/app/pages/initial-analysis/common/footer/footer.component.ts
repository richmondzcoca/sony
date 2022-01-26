import { Component, OnInit, ChangeDetectionStrategy, Input,} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router'; 
import { FormBuilder, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogService } from 'src/app/core/services/dialog.service';
import { InitialAnalysisFinalReportComponent } from '../final-report/final-report.component';
import { SweetAlertResult } from 'sweetalert2';
  
  @Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
  })
  export class FooterComponent implements OnInit {
    @Input() currentRoute: string = null;
    type = 'final-report';
    public href: string = "";

    constructor (
      private router: Router, 
      private dialog: MatDialog,
      private dialogService: DialogService
       ) {
      
    }
  
    ngOnInit(): void {
          this.href = this.router.url;
          this.currentRoute =  this.href.split('/').pop();
          
    }

    showActions() {
      const popup = this.dialog.open(InitialAnalysisFinalReportComponent).componentInstance;
    }

    close(): void {
        this.dialogService.confirm('sqrm.SQ_L06105').then((res: SweetAlertResult) => {

          if (res.isConfirmed) {
            this.dialog.open(InitialAnalysisFinalReportComponent).componentInstance;
          }
        });
    }
  }