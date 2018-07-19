import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SpotifyService {

  token = 'BQAzrpzu71lHVEvf_iOvVq5-Ix0wFftgXzOLFgpcoQwHP08XKR3eEt5sEO4EKu_vTLyB0VWSDJpj7BpPW0Q';

  headers: HttpHeaders = new HttpHeaders({
    // This token has been expired
    'Authorization': `Bearer ${this.token}`
  });

  constructor( private httpClient: HttpClient ) { }

  getNewReleases() {
    console.log(this.headers);
    return this.httpClient.get('https://api.spotify.com/v1/browse/new-releases', { headers: this.headers });
  }

  getArtist(termino: string) {
    return this.httpClient.get(`https://api.spotify.com/v1/search?query=${ termino }&type=artist&offset=0&limit=20`,
                                { headers: this.headers });
  }
}
