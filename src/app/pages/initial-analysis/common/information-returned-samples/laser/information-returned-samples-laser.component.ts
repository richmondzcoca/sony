import { Component, OnInit, ChangeDetectionStrategy,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CollectionView } from '@grapecity/wijmo';
import * as wjcCore from '@grapecity/wijmo';
import * as wjcGrid from '@grapecity/wijmo.grid';
import * as wjGrid from '@grapecity/wijmo.grid';
import * as wjcXlsx from '@grapecity/wijmo.xlsx';
import * as wjcGridXlsx from '@grapecity/wijmo.grid.xlsx';

import {  enableProdMode, NgModule, Inject } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { WjGridModule } from '@grapecity/wijmo.angular2.grid';

// Pop-up Dialog
import { MatDialog } from '@angular/material/dialog';
import { DialogService } from 'src/app/core/services/dialog.service';
import { SweetAlertResult } from 'sweetalert2';
// import { DataService } from './information-returned-samples-lsi.component';

@Component({
  selector: 'app-information-returned-samples-laser',
  templateUrl: './information-returned-samples-laser.component.html',
  styleUrls: ['./information-returned-samples-laser.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InformationReturnedSamplesLaserComponent implements OnInit {
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
            },
            {
                recordId: '1',
                scope: true,
                receptionNo: 'test2',
                receptionDate: 'test2',
                customerName: 'test2',
                productName: 'test2',
                customerSampleNo: 'test2',
                sonySampleNo: 'test2',
                markLotNo: 'test2',
                id: 'test2',
                dateOfFailureOccurence: 'test2',
                regionOfFailure: 'test2',
                processOfFailure: 'test2',
                detailProcessOfFailure: 'test2',
                failureMode: 'test2',
                detailsOfFailureMode: 'test2',
                symptomConfirmedbySony: 'test2',
                judgement: 'test2',
                detailsOfRequest: 'test2',
            },
            {
              recordId: '2',
              scope: true,
              receptionNo: 'test3',
              receptionDate: 'test3',
              customerName: 'test3',
              productName: 'test3',
              customerSampleNo: 'test3',
              sonySampleNo: 'test3',
              markLotNo: 'test3',
              id: 'test3',
              dateOfFailureOccurence: 'test3',
              regionOfFailure: 'test3',
              processOfFailure: 'test3',
              detailProcessOfFailure: 'test3',
              failureMode: 'test3',
              detailsOfFailureMode: 'test3',
              symptomConfirmedbySony: 'test3',
              judgement: 'test3',
              detailsOfRequest: 'test3',
          },
          {
            recordId: '3',
            scope: true,
            receptionNo: 'test4',
            receptionDate: 'test4',
            customerName: 'test4',
            productName: 'test4',
            customerSampleNo: 'test4',
            sonySampleNo: 'test4',
            markLotNo: 'test4',
            id: 'test4',
            dateOfFailureOccurence: 'test4',
            regionOfFailure: 'test4',
            processOfFailure: 'test4',
            detailProcessOfFailure: 'test4',
            failureMode: 'test4',
            detailsOfFailureMode: 'test4',
            symptomConfirmedbySony: 'test4',
            judgement: 'test4',
            detailsOfRequest: 'test4',
        },
        
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
    
    exportInfoReturnedSamples() {
      console.log('triggered...')
      let today = new Date().toISOString().slice(0, 10)
      let fileName = 'Laser'+ today +'.xlsx'
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
    

    save() {
      wjcGridXlsx.FlexGridXlsxConverter.saveAsync(this.flex,
          {
              includeColumnHeaders: this.includeColumnHeader,
              includeCellStyles: false,
              formatItem: this.customContent ? this._exportFormatItem : null
          },
          'FlexGrid.xlsx');
  }

  load() {
      let fileInput = <HTMLInputElement>document.getElementById('importFile');
      if (fileInput.files[0]) {
          this.customContent = false;
          wjcGridXlsx.FlexGridXlsxConverter.loadAsync(this.flex, fileInput.files[0], { includeColumnHeaders: this.includeColumnHeader });
      }
  }

    moveToPrevPage(){ this.returnedSamplesData.moveToPreviousPage(); }
    moveToNextPage(){ this.returnedSamplesData.moveToNextPage(); }

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

