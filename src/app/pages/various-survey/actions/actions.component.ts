import {
    Component,
    OnInit,
    ChangeDetectionStrategy,
    ViewChild,
} from '@angular/core';
import * as wjcCore from '@grapecity/wijmo';
import * as wjGrid from '@grapecity/wijmo.grid';
import { CollectionView } from '@grapecity/wijmo';
import { CountermeasurementService } from 'src/app/data/service/_tmp/module/various-survey/countermeasurement.service';

// Pop-up Dialog
import { MatDialog } from '@angular/material/dialog';
import { DialogService } from 'src/app/core/services/dialog.service';
import { SweetAlertResult } from 'sweetalert2';
import { CountermeasurementListResponse } from 'src/app/data/schema/api/_tmp/modules/various-survey/various-survey.response';
import { isNgTemplate } from '@angular/compiler';

class CustomMergeManager extends wjGrid.MergeManager {
    getMergedRange(
        panel: wjGrid.GridPanel,
        r: number,
        c: number,
        clip: boolean = true
    ) {
        var rng = new wjGrid.CellRange(r, c);
        if (
            panel.cellType == wjGrid.CellType.ColumnHeader ||
            panel.cellType == wjGrid.CellType.TopLeft
        ) {
            // create basic cell range
            // expand up/down
            for (var i = rng.row; i < panel.rows.length - 1; i++) {
                if (
                    panel.getCellData(i, rng.col, true) !=
                    panel.getCellData(i + 1, rng.col, true)
                )
                    break;
                rng.row2 = i + 1;
            }
            for (var i = rng.row; i > 0; i--) {
                if (
                    panel.getCellData(i, rng.col, true) !=
                    panel.getCellData(i - 1, rng.col, true)
                )
                    break;
                rng.row = i - 1;
            }
        }

        return rng;
    }
}

@Component({
    selector: 'app-actions',
    templateUrl: './actions.component.html',
    styleUrls: ['./actions.component.less'],
    changeDetection: ChangeDetectionStrategy.Default,
})
export class ActionsComponent implements OnInit {
    @ViewChild('workFlowGrid', { static: true }) grid: wjGrid.FlexGrid;
    counterMeasurementData: CountermeasurementListResponse[] = [];
    tempCounterMeasurement = [];
    cmData: wjcCore.CollectionView;
    headerName: string
    selectedItems: any[] = [];
    testSelect = ['Test 1', 'Test 2', 'Test 3'];

    constructor(
        private countermesurementService: CountermeasurementService,
        private dialog: MatDialog,
        private dialogService: DialogService
    ) {}

    ngOnInit(): void {
        // this.grid.rows.defaultSize = 35;
        this.countermesurementService
            .getCounterMeasurement('S21-0010')
            .subscribe((res) => {
                if (res) {
                    this.counterMeasurementData = res;
                    console.log( this.counterMeasurementData )

                    const actionsItems = [];
                    this.tempCounterMeasurement = res
                    
                    // inject new object key ActionNo.
                    const rHeader = []
                    const sHeader = []
                    this.tempCounterMeasurement.forEach((item) =>
                        item.measures.forEach((measure : any, index) => {
                            let actionNo = measure.ivgCmNo +'-'+ measure.dispNo
                            rHeader.push(measure.ivgCmNo)
                            this.headerName = measure.ivgCmNo
                            measure.actionNo = actionNo
                        })
                    );
                    rHeader.forEach((element) => {
                        if (!sHeader.includes(element)) {
                            sHeader.push(element);
                        }
                    });
                       
                    this.tempCounterMeasurement.forEach((item, index)=>{
                        let aa = sHeader.filter((element, i) =>{
                            if (i === index){
                                return element
                            }
                        }); 
                        item.measureCmNo = aa[0]
                    });
        
                    // inject new object key for CorrelatineActionInfoHeader and count of Measures record
                    this.tempCounterMeasurement.forEach((item, index)=> {
                            let cntMeasureRecords = item.measures.length
                            item.cntMeasureRecords = cntMeasureRecords
                            item.cmHeader = item.reqIvgKey+'-'+item.measureCmNo+':'+cntMeasureRecords
                        }
                    );
                }
            });

       
    }

    onInitialized(grid: wjGrid.FlexGrid) {
        grid.mergeManager = new CustomMergeManager();
    }

    deleteCorrelativeAction(): void {
        console.log('--------deleteCorrelativeAction----------');
        console.log(this.counterMeasurementData);
        console.log('-----------------------------------------');
        const items = [];
        this.counterMeasurementData.forEach((item) =>
            item.measures.forEach((measure) => {
                if (measure.isDelete) {
                    items.push(measure.ivgCmNo);
                }
            })
        );

        console.log(items);
        console.log('Count selected Items: ', this.selectedItems.length);
        this.dialogService
            .confirm(
                'Selected line will be deleted. Would you like to continue?'
            )
            .then((res: SweetAlertResult) => {
                if (res.isConfirmed) {
                    console.log('trigerred deleteCorrelativeAction...');
                }
            });
    }




}
