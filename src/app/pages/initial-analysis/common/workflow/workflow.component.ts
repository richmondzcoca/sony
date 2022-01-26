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
  selector: 'app-workflow',
    templateUrl: './workflow.component.html',
    styleUrls: ['./workflow.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkflowComponent implements OnInit {
    @ViewChild('returnedSamplesGrid', { static: true }) grid: wjGrid.FlexGrid;
    href: string = '';
    currentRoute: string = '';

    returnedSamplesData: wjcCore.CollectionView | undefined;
    workFlowData: wjcCore.CollectionView | any;

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

        this.workFlowData = new CollectionView([
            {
                recordId: '0',
                step: 'test',
                name: 'test',
                sectionName: 'test',
                completionDate: 'test',
                result: 'test',
                comments: 'test'
            },
            {
                recordId: '1',
                step: 'test2',
                name: 'test2',
                sectionName: 'test2',
                completionDate: 'test2',
                result: 'test2',
                comments: 'test2'
            }
        ]);
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
            .confirm('sqrm.SQ_L01020')
            .then((res: SweetAlertResult) => {
                if (res.isConfirmed) {
                    // currentElement.closest('.wj-row').remove();
                  console.log('triggered...')
                  let newData = this.workFlowData.items.filter( data => data.recordId !== x );
                  this.workFlowData = new CollectionView(newData);
                  this.grid.itemsSource = this.workFlowData.items;

                //   this.returnedSamplesData.items.splice(x, 0);
                //   this.grid.itemsSource = this.returnedSamplesData.items
                //   this.grid.refresh()
                }
            
            });
    }

    showAttachedSub(){
        alert();
    }
    
    exportInfoReturnedSamples() {
      console.log('triggered...')
      let today = new Date().toISOString().slice(0, 10)
      let fileName = 'LSI'+ today +'.xlsx'
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

