import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
} from '@angular/core';
import * as wjCore from '@grapecity/wijmo';
import * as wjGrid from '@grapecity/wijmo.grid';
import { CollectionView } from '@grapecity/wijmo';
import { FlexGrid } from '@grapecity/wijmo.grid';
import { MatDialog } from '@angular/material/dialog';


class CustomMergeManager extends wjGrid.MergeManager {
  getMergedRange(panel: wjGrid.GridPanel, r: number, c: number, clip: boolean = true) {
    var rng = new wjGrid.CellRange(r, c);
    if (panel.cellType == wjGrid.CellType.ColumnHeader || panel.cellType == wjGrid.CellType.TopLeft) {
      // create basic cell range

      // expand up/down
      for (var i = rng.row; i < panel.rows.length - 1; i++) {
        if (panel.getCellData(i, rng.col, true) != panel.getCellData(i + 1, rng.col, true))
          break;
        rng.row2 = i + 1;
      }
      for (var i = rng.row; i > 0; i--) {
        if (panel.getCellData(i, rng.col, true) != panel.getCellData(i - 1, rng.col, true))
          break;
        rng.row = i - 1;
      }
      
    }

    return rng;
  }
}

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReportComponent implements OnInit {
  @ViewChild('returnedSamplesGrid', { static: true}) returnedSamplesGrid: FlexGrid;
  @ViewChild('workFlowGrid', { static: true}) workFlowGrid: FlexGrid;

  workFlowData: CollectionView | [];
  SampleDataReport: CollectionView | [];
  currentPage: number = 1;
  dropDownData = [
  
  ];

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.workFlowData = new CollectionView([{
      step: 'test',
      name: 'test',
      sectionName: 'test',
      completionDate: 'test',
      result: 'test',
      comments: 'test'
    }]);
    
    this.SampleDataReport = new CollectionView([{
      scope: false,
      ver: 'ver2',
      customername: 'test',
      productname: 'IMX001AKE-1',
      reportno: 'S18-0001-H02',
      filename: 'test.pdf',
      password: 'test',
      filesize: '112.68KB',
      sentdate: '2020/07/31 09:41',
    }]);
  }

}