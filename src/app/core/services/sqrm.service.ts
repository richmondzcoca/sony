import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { SqrmError } from '../../data/schema/sqrm-error';
import Swal from 'sweetalert2';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
    providedIn: 'root'
})
export class SqrmService {

    constructor(private http: HttpClient, private translate: TranslateService) { }

    extractResponse<T>(res: any): Observable<T> {
        if (res) {
            if ('resultCode' in (res as SqrmError)) {
                const error = res as SqrmError;
                this.translate.get('sqrm.' + error.resultCode).subscribe((message: string) => {
                    Swal.fire('', message, 'error');
                });
                return of<T>(null);
            } else {
                return of<T>(res as T);
            }
        } else {
            return of<T>(null);
        }
    }

    get<T>(url: string): Observable<T> {

        return this.http.get<any>(url).pipe(mergeMap((res: any) => {
            return this.extractResponse<T>(res);
        }));

    }

    post<T>(url: string, data: any): Observable<T> {

        return this.http.post<any>(url, data).pipe(mergeMap((res: any) => {
            return this.extractResponse<T>(res);
        }));
    }

    put<T>(url: string, data: any): Observable<T> {

        return this.http.put<any>(url, data).pipe(mergeMap((res: any) => {
            return this.extractResponse<T>(res);
        }));
    }

    delete<T>(url: string): Observable<T> {

        return this.http.delete<any>(url).pipe(mergeMap((res: any) => {
            return this.extractResponse<T>(res);
        }));
    }
}
