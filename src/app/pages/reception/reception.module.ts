import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReceptionRoutingModule } from './reception-routing.module';
import { ReceptionComponent } from './reception/reception.component';
import { OccurenceComponent } from './occurence/occurence.component';

@NgModule({
  declarations: [
    ReceptionComponent,
    OccurenceComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReceptionRoutingModule,
  ],
  exports: [
    ReceptionComponent,
  ],
  providers: [
  ]
})
export class ReceptionModule {}
