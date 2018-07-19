import { SpotifyService } from './../../services/spotify.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  releases: any[] = [];

  constructor(private spotifyService: SpotifyService) {
    spotifyService.getNewReleases()
    .subscribe( (data: any) => {
      console.log(data.albums.items);
      this.releases = data.albums.items;
    });
  }

}
