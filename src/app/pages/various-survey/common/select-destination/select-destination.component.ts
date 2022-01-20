import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-select-destination',
  templateUrl: './select-destination.component.html',
  styleUrls: ['./select-destination.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectDestinationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
