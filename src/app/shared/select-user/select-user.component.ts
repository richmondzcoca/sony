import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-select-user',
  templateUrl: './select-user.component.html',
  styleUrls: ['./select-user.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectUserComponent implements OnInit {
  type = 'approver';
  dropDownData = [
    'Sony Semiconductor Corporation (SCK)',
  ];

  searchResults = [
    {
      name: 'Test Name',
      email: 'test@test.com',
      section: 'Test Section',
      supervisor: 'Test supervisor'
    },
    {
      name: 'Test Name 2',
      email: 'test_2@test.com',
      section: 'Test Section 2',
      supervisor: 'Test supervisor 2'
    },
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
