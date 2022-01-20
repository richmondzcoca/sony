import { Component, OnInit, ChangeDetectionStrategy,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CollectionView } from '@grapecity/wijmo';
import * as wjcCore from '@grapecity/wijmo';
import * as wjcGrid from '@grapecity/wijmo.grid';
import * as wjGrid from '@grapecity/wijmo.grid';
import * as wjcXlsx from '@grapecity/wijmo.xlsx';
import * as wjcGridXlsx from '@grapecity/wijmo.grid.xlsx';

// Pop-up Dialog
import { MatDialog } from '@angular/material/dialog';
import { DialogService } from 'src/app/core/services/dialog.service';
import { SweetAlertResult } from 'sweetalert2';

@Component({
  selector: 'app-outline-request-is',
  templateUrl: './outline-request-is.component.html',
  styleUrls: ['./outline-request-is.component.less'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class OutlineRequestIsComponent implements OnInit {
    @ViewChild('returnedSamplesGrid', { static: true }) grid: wjGrid.FlexGrid;
    href: string = '';
    currentRoute: string = '';

    returnedSamplesData: wjcCore.CollectionView | undefined;

    currentPage: number = 1;
    totalPages: number = 1;
    pages: number[] = [1];

    dropDownData1 = ['Test 1', 'Test 2'];
    data1 = [{ name: 'monqiue' }, { name: 'clariza' }];
    includeColumnHeader = true;
    customContent = false;
    @ViewChild('flex', { static: true }) flex: wjcGrid.FlexGrid;

    x : string
    constructor(
        private router: Router,
        private dialog: MatDialog,
        private dialogService: DialogService
    ) {}

    ngOnInit(): void {
        this.href = this.router.url;
        this.currentRoute = this.href.split('/').pop();

        this.returnedSamplesData = new CollectionView([
            {
                recordId: '0',
                scope: true,
                receptionNo: 'test1',
                receptionDate: 'test1',
                customerName: 'test1',
                productName: 'test1',
                customerSampleNo: 'test1',
                sonySampleNo: 'test1',
                markLotNo: 'test1',
                id: 'test1',
                dateOfFailureOccurence: 'test1',
                regionOfFailure: 'test1',
                processOfFailure: 'test1',
                detailProcessOfFailure: 'test1',
                failureMode: 'test1',
                detailsOfFailureMode: 'test1',
                symptomConfirmedbySony: 'test1',
                judgement: 'test1',
                detailsOfRequest: 'test1',
            }
        
        ], { pageSize: 3});
    }

    deselectAllScope(): void {
        // this.returnedSamplesData.filter = (item) => { return item.scope = false };
        this.returnedSamplesData.items.forEach((item) => {
            item.scope = false;
        });
        
    }

    deleteIrsRecord(x : number): void {
      console.log('Selected record id: ', x )
        this.dialogService
            .confirm('sqrm.SQ_L00225')
            .then((res: SweetAlertResult) => {
                if (res.isConfirmed) {
                  console.log('triggered...')
                  this.returnedSamplesData.items.splice(x, 1);
                  this.grid.itemsSource = this.returnedSamplesData.items
                  this.grid.refresh()
                }
            
            });
    }
    
    exportInfoRetunedSamples() {
      console.log('downloading...')
      let today = new Date().toISOString().slice(0, 10)
      let fileName = 'IS'+ today +'.xlsx'
        wjcGridXlsx.FlexGridXlsxConverter.saveAsync(
            this.flex,
            {
                includeColumnHeaders: this.includeColumnHeader,
                includeCellStyles: false,
                formatItem: this.customContent ? this._exportFormatItem : null,
            },
            fileName
        );


    }

    private _exportFormatItem(args: wjcGridXlsx.XlsxFormatItemEventArgs) {
        var p = args.panel,
            row = args.row,
            col = args.col,
            xlsxCell = args.xlsxCell,
            cell: HTMLElement;

        if (p.cellType === wjcGrid.CellType.Cell) {
            if (p.columns[col].binding === 'color') {
                if (xlsxCell.value) {
                    if (!xlsxCell.style.font) {
                        xlsxCell.style.font = {};
                    }
                    xlsxCell.style.font.color = (<string>(
                        xlsxCell.value
                    )).toLowerCase();
                }
            } else if (
                p.columns[col].binding === 'active' &&
                p.rows[row] instanceof wjcGrid.GroupRow
            ) {
                cell = args.getFormattedCell();
                xlsxCell.value = cell.textContent.trim();
                xlsxCell.style.hAlign = wjcXlsx.HAlign.Left;
            }
        }
    }
}

