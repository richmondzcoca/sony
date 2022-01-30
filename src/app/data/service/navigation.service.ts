import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModifyComponent } from 'src/app/pages/initial-analysis/common/modify/modify.component';
import { CreateComponent } from 'src/app/pages/initial-analysis/common/create/create.component';
import { NavigationComponent } from 'src/app/shared/navigation/navigation.component';

@Injectable({
    providedIn: 'root'
})
export class NavigationService {

    constructor(
        private dialog: MatDialog
    ) { }

    showNavigationDialog() {
        const popup = this.dialog.open(NavigationComponent, {
            width: '600px',
         }).componentInstance;
    }

    showCreateDialog() {
        const popup = this.dialog.open(CreateComponent, {
            width: '600px',
         }).componentInstance;
    }

    showModifyDialog() {
        const popup = this.dialog.open(ModifyComponent, {
            width: '600px',
         }).componentInstance;
    }
}