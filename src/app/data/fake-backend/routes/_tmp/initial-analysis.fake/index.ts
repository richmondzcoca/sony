import { HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { errorMissingFake, ok } from '../../../fake.function'
import InformationReturnedJson from './data/information-returned-fake.json';



export function fakeInitialReturnedSample (request: HttpRequest<any>, apiPath: string): Observable<HttpEvent<any>> {
    const { url, method, headers, body } = request;
    console.log('------- you are here : fakeInitialReturnedSample ------');
    console.log('URL: ', url)
    console.log('Method: ', method)
    console.log('headers: ', headers)
    console.log('body: ', body )
    console.log('apiPath: ', apiPath)
    console.log('-----------------------------------------------');

    if(method === 'GET') {
        if(apiPath.includes('/initial-analysis')) { return getInformationReturnedJson(); }
    } 
    return errorMissingFake(request);

}
function getInformationReturnedJson() : Observable<HttpEvent<any>>{
    console.log('... getCountermeasurement ...')
    return ok(InformationReturnedJson);
}