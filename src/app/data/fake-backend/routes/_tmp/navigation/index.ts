import { HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { errorMissingFake, ok } from '../../../fake.function'
import navigationJson from './data/navigation-data.json';



export function fakeNavigation (request: HttpRequest<any>, apiPath: string): Observable<HttpEvent<any>> {
    const { url, method, headers, body } = request;
    console.log('------- you are here : fakeNavigation ------');
    console.log('URL: ', url)
    console.log('Method: ', method)
    console.log('headers: ', headers)
    console.log('body: ', body )
    console.log('apiPath: ', apiPath)
    console.log('-----------------------------------------------');

    if (apiPath.match(/\/navi\/(.+)+\/data/i) && method === 'GET') {
        return getNavigationData(url);
    } else {
        return errorMissingFake(request);
    }

}

function getNavigationData(url) : Observable<HttpEvent<any>>{
    const splitName = url.split('/');
    const name = splitName[splitName.length - 2];
    const data = navigationJson.filter(each => each.name === name);
    
    if (data) {
        return ok(data);
    } else {
        return ok({result: "No data found."});
    }
}