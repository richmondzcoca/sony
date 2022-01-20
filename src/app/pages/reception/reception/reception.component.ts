import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CollectionView } from '@grapecity/wijmo';
import { SelectCustomerComponent } from 'src/app/shared/select-customer/select-customer.component';
import { OccurenceComponent } from '../occurence/occurence.component';

@Component({
  selector: 'app-reception',
  templateUrl: './reception.component.html',
  styleUrls: ['./reception.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReceptionComponent implements OnInit {
  SampleData: CollectionView | [];
  currentPage: number = 1;
  dropDownData = [
  
  ];

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.SampleData = new CollectionView([{
      scope: false,
      customersampleno: 'test1',
      marklotno: 'test1',
      dateoffailureoccurence: 'test1',
      processoffailure: 'test1',
      failuremode: 'test1',
      dateoffailuremode: 'test',
      sonysampleno: 'test',
      id: 'test',
      region: 'test',
      detailprocessoffailure: 'test',
      detailoffailuremode: 'test',
      remounted: 'test',
      productcode: 'test',
    }]);
  }
  
  showActions() {
    const popup = this.dialog.open(OccurenceComponent).componentInstance;
  }

  showSelectCustomerDialog() {
    const popup = this.dialog.open(SelectCustomerComponent).componentInstance;
  }
}
