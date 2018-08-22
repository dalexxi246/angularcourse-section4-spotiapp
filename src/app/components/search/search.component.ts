import { SpotifyService } from './../../services/spotify.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  artists : any[] = [];

  constructor(private spotifyService: SpotifyService) { }

  buscar(termino: string) {
    this.spotifyService.getArtist(termino).subscribe(
      (data: any) => {
        this.artists = data;
      }
    );
  }

}
