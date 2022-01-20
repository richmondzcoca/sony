import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SqrmService } from 'src/app/core/services/sqrm.service';
import { environment } from 'src/environments/environment';
import { User } from '../schema/user';

@Injectable({
    providedIn: 'root'
})
export class UsersService {

    private apiUrl = `${environment.apiBaseUrl}${environment.apiPrefix}/users`;

    constructor(
        private sqrmService: SqrmService,
    ) { }

    getUser(loginId: string): Observable<User> {
        return this.sqrmService.get<User>(`${this.apiUrl}/${loginId}`);
    }
}