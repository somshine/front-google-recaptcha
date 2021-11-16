import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CaptchaResponse } from '../model/CaptchaResponse';
import { BASE_URL } from '../utils/utils';

@Injectable({
  providedIn: 'root'
})
export class UpdatescoreService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private verificationOfToken = BASE_URL + "/verifyUser.do";
  constructor(private httpClient: HttpClient) { }

  updateScore(type: string): Observable<CaptchaResponse> {
    return this.httpClient.get<CaptchaResponse>(this.verificationOfToken);
  }

  verifyToken(token: string): Observable<CaptchaResponse> {
    let response: Object = "";
    response = {
      "response": token
    };
    return this.httpClient.post<CaptchaResponse>(this.verificationOfToken, token, this.httpOptions);
  }
}
