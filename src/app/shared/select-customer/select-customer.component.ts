import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CollectionView } from '@grapecity/wijmo';
import { FlexGrid } from '@grapecity/wijmo.grid';

@Component({
  selector: 'app-select-customer',
  templateUrl: './select-customer.component.html',
  styleUrls: ['./select-customer.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectCustomerComponent implements OnInit {
  dropDownData1 = ['Test option 1', 'Test option 2'];

  searchResults: CollectionView = new CollectionView([]);

  constructor() {}

  ngOnInit(): void {}

  onInitialized(grid: FlexGrid) {
    this.searchResults = new CollectionView([
      {
        customerCode: 'test',
        customerNameAbbr: 'test',
        customerName: 'Test Name',
        factoryLocation: 'test location',
        customerSection: 'test',
        customerContactPerson: 'Test Name 1',
        salesType: 'Internal sale'
      },
      {
        customerCode: 'test',
        customerNameAbbr: 'test',
        customerName: 'Test Name',
        factoryLocation: 'test location',
        customerSection: 'test',
        customerContactPerson: 'Test Name 1',
        salesType: 'Internal sale'
      },
      {
        customerCode: 'test',
        customerNameAbbr: 'test',
        customerName: 'Test Name',
        factoryLocation: 'test location',
        customerSection: 'test',
        customerContactPerson: 'Test Name 1',
        salesType: 'Internal sale'
      },
      {
        customerCode: 'test',
        customerNameAbbr: 'test',
        customerName: 'Test Name',
        factoryLocation: 'test location',
        customerSection: 'test',
        customerContactPerson: 'Test Name 1',
        salesType: 'Internal sale'
      },
      {
        customerCode: 'test',
        customerNameAbbr: 'test',
        customerName: 'Test Name',
        factoryLocation: 'test location',
        customerSection: 'test',
        customerContactPerson: 'Test Name 1',
        salesType: 'Internal sale'
      },
      {
        customerCode: 'test',
        customerNameAbbr: 'test',
        customerName: 'Test Name',
        factoryLocation: 'test location',
        customerSection: 'test',
        customerContactPerson: 'Test Name 1',
        salesType: 'Internal sale'
      },
      {
        customerCode: 'test',
        customerNameAbbr: 'test',
        customerName: 'Test Name',
        factoryLocation: 'test location',
        customerSection: 'test',
        customerContactPerson: 'Test Name 1',
        salesType: 'Internal sale'
      },
      {
        customerCode: 'test',
        customerNameAbbr: 'test',
        customerName: 'Test Name',
        factoryLocation: 'test location',
        customerSection: 'test',
        customerContactPerson: 'Test Name 1',
        salesType: 'Internal sale'
      },
      {
        customerCode: 'test',
        customerNameAbbr: 'test',
        customerName: 'Test Name',
        factoryLocation: 'test location',
        customerSection: 'test',
        customerContactPerson: 'Test Name 1',
        salesType: 'Internal sale'
      },
      {
        customerCode: 'test',
        customerNameAbbr: 'test',
        customerName: 'Test Name',
        factoryLocation: 'test location',
        customerSection: 'test',
        customerContactPerson: 'Test Name 1',
        salesType: 'Internal sale'
      },
    ]);
  }
}
