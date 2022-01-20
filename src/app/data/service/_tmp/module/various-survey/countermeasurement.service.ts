import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SqrmService } from 'src/app/core/services/sqrm.service';
import { environment } from 'src/environments/environment' 
import { CountermeasurementListResponse } from 'src/app/data/schema/api/_tmp/modules/various-survey/various-survey.response';

@Injectable ({
    providedIn: 'root'
})
export class CountermeasurementService {
    private apiUrl = `${environment.apiBaseUrl}${environment.apiPrefix}/_tmp/mon/investigates`;
    
    constructor( private sqrmService: SqrmService ) {}

    getCounterMeasurement(receptionid: string): Observable<CountermeasurementListResponse[]> {
        console.log('  <<<<< you are here: getCounterMeasurement >>>>')
        let endpoint = this.sqrmService.get<CountermeasurementListResponse[]>(`${this.apiUrl}/${receptionid}/measures/data`);
        return endpoint
    }

    addCounterMeasurement(receptionid: string, data: any): Observable<CountermeasurementListResponse> {
        let endpoint = this.sqrmService.post<CountermeasurementListResponse>(`${this.apiUrl}/${receptionid}/measures/save`, data);
        return endpoint
    }

    updateCounterMeasurement(receptionid: string, data: any): Observable<CountermeasurementListResponse> {
        let endpoint = this.sqrmService.put<CountermeasurementListResponse>(`${this.apiUrl}/${receptionid}/measures/save`, data);
        return endpoint
    }
    
    deleteCountermeasurement(ivgCmNo: string[] ): Observable<any> {
        console.log('  <<<<< you are here: deleteCountermeasurement >>>>')
        return this.sqrmService.delete<any>(`${this.apiUrl}/${ivgCmNo}/measures/delete`);
    }

}