import { HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/data/schema/user';
import { errorMissingFake, idFromUrl, ok } from '../../fake.function';
import userList from './users.json';

export function fakeUsers(request: HttpRequest<any>, apiPath: string): Observable<HttpEvent<any>> {
    const { url, method, headers, body } = request;

    if (apiPath.match(/\/users\/(.+)+/i) && method === 'GET') {
        return getById(url);
    } else {
        return errorMissingFake(request);
    }
}

function getById(url): Observable<HttpEvent<any>> {
    const id = idFromUrl(url);
    const user = (userList as User[]).find(u => u.loginId === id);
    if (user) {
        return ok(user);
    } else {
        return ok();
    }
}