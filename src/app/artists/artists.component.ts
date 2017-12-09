import { Component, OnInit } from '@angular/core';

import { ArtistService } from './artist.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {
  public artistName: string;
  public artists: Array<any> = [];
  constructor(private _artistService: ArtistService) { }

  ngOnInit() {
  }

  searchArtists() {
    this._artistService.searchArtists(this.artistName)
      .then((response) => {
        this.artists = response.results.artistmatches.artist.map( (element) => {
          return {name: element.name, img: element.image[1]['#text'] };
        });
        console.log(response);
      });
  }

  getTopAlbums(artistName) {
    this._artistService.getTopAlbums(artistName)
      .then((response) => {
        /*this.artists = response.results.artistmatches.artist.map( (element) => {
          return {name: element.name, img: element.image[1]['#text'] };
        });*/
        console.log(response);
      });
  }
}
