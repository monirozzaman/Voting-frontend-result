import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class BackendService {
  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {
  }

  public addTotalVote(symbolName, totalVote): Observable<any> {
    const rBody = {
      'symbolName': symbolName,
      'totalVote': totalVote
    };
    const url = this.baseUrl + 'vote/add';
    return this.http.post(url, rBody);
  }

  public getResult(): Observable<any> {

    const url = this.baseUrl + 'vote/result';
    return this.http.get(url);
  }
}
