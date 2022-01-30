import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SqrmService } from 'src/app/core/services/sqrm.service';
import { environment } from 'src/environments/environment' 

@Injectable ({
    providedIn: 'root'
})
export class NavigationDataService {
    private apiUrl = `${environment.apiBaseUrl}${environment.apiPrefix}/navi`;
    
    constructor( private sqrmService: SqrmService ) {}

    getNavigationData(reqIvgKey: string): Observable<any[]> {
        let endpoint = this.sqrmService.get<any[]>(`${this.apiUrl}/${reqIvgKey}/data`);
        return endpoint
    }
}