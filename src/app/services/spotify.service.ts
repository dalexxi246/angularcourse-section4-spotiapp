import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SpotifyService {

  headers: HttpHeaders = new HttpHeaders({
    // This token has been expired
    'Authorization': 'Bearer BQBu8-Xzxod-mbw-IXoPGOAPIRlFbTq8AEUMvgp_Vwdajv_5ikjdgjM2bgciABg4HCBhB-Co8aohAAucWUY'
  });

  constructor( private httpClient: HttpClient ) { }

  getNewReleases() {
    console.log(this.headers);
    return this.httpClient.get('https://api.spotify.com/v1/browse/new-releases', { headers: this.headers });
  }
}
