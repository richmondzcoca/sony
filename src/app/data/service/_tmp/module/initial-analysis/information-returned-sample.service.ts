import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SqrmService } from 'src/app/core/services/sqrm.service';
import { environment } from 'src/environments/environment' 

@Injectable ({
    providedIn: 'root'
})
export class InformationReturnedSampleService {
    private apiUrl = `${environment.apiBaseUrl}${environment.apiPrefix}/_tmp/initial-analysis`;
    
    constructor( private sqrmService: SqrmService ) {}

    getInformationReturnedSampleData(reqIvgKey: string): Observable<any[]> {
        console.log('  <<<<< you are here: getCounterMeasurement >>>>')
        let endpoint = this.sqrmService.get<any[]>(`${this.apiUrl}/${reqIvgKey}/data`);
        return endpoint
    }
}