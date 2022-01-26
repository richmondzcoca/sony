import { Component, OnInit, ChangeDetectionStrategy, Input,} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { FormBuilder, FormControl } from '@angular/forms';
import { CollectionView } from '@grapecity/wijmo';
  
  @Component({
    selector: 'app-select-destination-analysis',
    templateUrl: './select-destination-analysis.component.html',
    styleUrls: ['./select-destination-analysis.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
  })
  export class SelectDestinationAnalysisComponent implements OnInit {
    @Input() currentRoute: string = null;
    selDestinationData: CollectionView | [];

    public href: string = "";
    constructor(private router: Router) {
      
    }
  
    ngOnInit(): void {
          this.href = this.router.url;
          this.currentRoute =  this.href.split('/').pop();
          this.selDestinationData = new CollectionView([{
            name: 'hidenori tanaka',
            sectionName: 'Factory Business System Management Section',
            eMail: 'Hidenori.x.Tanaka@sony.com',
            delete: 'test',

          }]);
    }
  }
  