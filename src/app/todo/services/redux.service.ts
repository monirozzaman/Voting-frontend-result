import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class ReduxService {
  baseUrl: string = environment.baseUrlRedux;

  constructor(private http: HttpClient) {
  }

  public save(symbolName): Observable<any> {
    const rBody = {
      'id': '1',
      'symbolName': symbolName,
      'isVoted': 1,
    };
    const url = this.baseUrl + 'redux/save';
    return this.http.post(url, rBody);
  }

  public getAllReduxValue(): Observable<any> {

    const url = this.baseUrl + 'redux/get-all';
    return this.http.get(url);
  }

  public refresh(): Observable<any> {

    const url = this.baseUrl + 'redux';
    return this.http.get(url);
  }
}
