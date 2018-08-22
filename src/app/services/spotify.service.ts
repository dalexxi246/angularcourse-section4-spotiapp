import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { map } from "rxjs/operators";

@Injectable()
export class SpotifyService {
  constructor(private httpClient: HttpClient) {}

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const token =
      "BQCGOeqqzc9q49jn_spAOUlRJWKFCQRpCA7JME4u9ZqtHdJcs372LTGYpE_zW0OPBpzELjqKi-NUb6khu8o";

    const headers: HttpHeaders = new HttpHeaders({
      // This token has been expired
      Authorization: `Bearer ${token}`
    });

    return this.httpClient.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery("browse/new-releases").pipe(
      map(data => data["albums"].items)
    );
  }

  getArtist(termino: string) {
    return this.getQuery(
      `search?query=${termino}&type=artist&offset=0&limit=20`
    ).pipe(map(data => data["artists"].items));
  }
}
