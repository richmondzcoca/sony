import { HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { errorMissingFake, ok } from '../../../fake.function'
import { CountermeasurementListResponse } from 'src/app/data/schema/api/_tmp/modules/various-survey/various-survey.response';
import countermeasurement from './data/countermeasurement.json';



export function fakeVariousSurvey(request: HttpRequest<any>, apiPath: string): Observable<HttpEvent<any>> {
    const { url, method, headers, body } = request;
    console.log('------- you are here : fakeVariousSurvey ------');
    console.log('URL: ', url)
    console.log('Method: ', method)
    console.log('headers: ', headers)
    console.log('body: ', body )
    console.log('apiPath: ', apiPath)
    console.log('-----------------------------------------------');

    if(method === 'GET') {
        if(apiPath.includes('/measures')) { return getCountermeasurement(); }
    } 
    return errorMissingFake(request);

}
function getCountermeasurement() : Observable<HttpEvent<any>>{
    console.log('... getCountermeasurement ...')
    return ok(countermeasurement);
}