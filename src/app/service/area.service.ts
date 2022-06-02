import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  constructor(private httpclient: HttpClient) { }
  // states api calling here by function/method. //
  getStates(params?: any): Observable<any> {
    return this.httpclient.get("https:/backendapi-developmentazurewebsites.net/api/v1/Area/States",
      {
        headers: new HttpHeaders
          ({
            "Ocp-Apim-Subscription-Key": "433337c2e1f348f1bf6df7f937293078",
            "app_key": "%2beZrrD2e7Q2UNU2tejed1U6b3kgSsRWwgRUV1ooZn0H70tCDmcB%2bFDu44fBGbnNJrup5%2bl9Zb8vn2Br%2fxCi1cGYYc93AWGiYYcF%2bZ83QIOz6gBG5Qe3LN4PF0U0ZuhhJfQ8EGk0MgFEifjHWpHF9lR4ZcQpBwA%2b3Kul58IXk%2fm%2f1rEfjLLGAipWM%2fg1vlnz3aWpM7ZVsP8Gn2f0ZcqdZXuMBYYn4oRjTFoZErHwKMNU22DnuFB2qSRG7DmnTQCgH8hti%2fBtJe%2fqgcDGDK9%2bzgwwc3ufEvZqV9y65vMp7iVAcFMSbCohRDHVoP3X3U7xiZE2YMaHD1t6M%2fOizjhDZk35GHdf886YB3jTJ6g%2bl%2fFAtGNZs5mB6Qi0V7SihWaT1TsLCLBI2J4TIC6sUew1dRncd0LhTBAt1L%2bgBUpVN%2bdscZP5xNuym9KzMB2JKvr%2bY3sjqnLM2uv1dgsCut8oGO2Fl3aq%2bfhZXtUCXvc8fNz1CMEz8P4c2CPjixvyXjLs2Zpu8IY%2fZqBJZ5X%2fVWralmeDFjHHr0%2fOnqm8YK2NVVioitZBRWGk6egOoZCeTnwK5"
          }),
        params
      });
  }
  //vin api calling here by function//
  getGetByVIN(params?: any):
    Observable<any> {
    return this.httpclient.get("https://carweekapm.azure-api.net/CashForCar/GetByVIN",
      {
        headers: new HttpHeaders({
          "Ocp-Apim-Subscription-Key": "433337c2e1f348f1bf6df7f937293078",
          "app_key": "%2beZrrD2e7Q2UNU2tejed1U6b3kgSsRWwgRUV1ooZn0H70tCDmcB%2bFDu44fBGbnNJrup5%2bl9Zb8vn2Br%2fxCi1cGYYc93AWGiYYcF%2bZ83QIOz6gBG5Qe3LN4PF0U0ZuhhJfQ8EGk0MgFEifjHWpHF9lR4ZcQpBwA%2b3Kul58IXk%2fm%2f1rEfjLLGAipWM%2fg1vlnz3aWpM7ZVsP8Gn2f0ZcqdZXuMBYYn4oRjTFoZErHwKMNU22DnuFB2qSRG7DmnTQCgH8hti%2fBtJe%2fqgcDGDK9%2bzgwwc3ufEvZqV9y65vMp7iVAcFMSbCohRDHVoP3X3U7xiZE2YMaHD1t6M%2fOizjhDZk35GHdf886YB3jTJ6g%2bl%2fFAtGNZs5mB6Qi0V7SihWaT1TsLCLBI2J4TIC6sUew1dRncd0LhTBAt1L%2bgBUpVN%2bdscZP5xNuym9KzMB2JKvr%2bY3sjqnLM2uv1dgsCut8oGO2Fl3aq%2bfhZXtUCXvc8fNz1CMEz8P4c2CPjixvyXjLs2Zpu8IY%2fZqBJZ5X%2fVWralmeDFjHHr0%2fOnqm8YK2NVVioitZBRWGk6egOoZCeTnwK5"
        })
        ,
        params
      });
  }
  // next page with header and params (id)
  getGetByVINexteriorcolors(exteriorcolors?: any): Observable<any> {
    let searchParams = new HttpParams();

    searchParams = searchParams.append('vin', '1GCPTDE13K1184121');
    searchParams = searchParams.append('exteriorcolors', '');
    return this.httpclient.get("https://carweekapm.azure-api.net/CashForCar/GetByVIN/+ exteriorcolors", 
      {
        headers: new HttpHeaders({
          "Ocp-Apim-Subscription-Key": "433337c2e1f348f1bf6df7f937293078",
          "app_key": "%2beZrrD2e7Q2UNU2tejed1U6b3kgSsRWwgRUV1ooZn0H70tCDmcB%2bFDu44fBGbnNJrup5%2bl9Zb8vn2Br%2fxCi1cGYYc93AWGiYYcF%2bZ83QIOz6gBG5Qe3LN4PF0U0ZuhhJfQ8EGk0MgFEifjHWpHF9lR4ZcQpBwA%2b3Kul58IXk%2fm%2f1rEfjLLGAipWM%2fg1vlnz3aWpM7ZVsP8Gn2f0ZcqdZXuMBYYn4oRjTFoZErHwKMNU22DnuFB2qSRG7DmnTQCgH8hti%2fBtJe%2fqgcDGDK9%2bzgwwc3ufEvZqV9y65vMp7iVAcFMSbCohRDHVoP3X3U7xiZE2YMaHD1t6M%2fOizjhDZk35GHdf886YB3jTJ6g%2bl%2fFAtGNZs5mB6Qi0V7SihWaT1TsLCLBI2J4TIC6sUew1dRncd0LhTBAt1L%2bgBUpVN%2bdscZP5xNuym9KzMB2JKvr%2bY3sjqnLM2uv1dgsCut8oGO2Fl3aq%2bfhZXtUCXvc8fNz1CMEz8P4c2CPjixvyXjLs2Zpu8IY%2fZqBJZ5X%2fVWralmeDFjHHr0%2fOnqm8YK2NVVioitZBRWGk6egOoZCeTnwK5"
        }),
       
      });
  }
  //Description api calling here//
  getGetMarketValue(): Observable<any> {
    return this.httpclient.get("https://carweekapm.azure-api.net/CashForCar/ GetMarketValue")
  }
}
