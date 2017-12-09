import { Component, OnInit } from '@angular/core';
import { ArtistService } from '../artist.service';

import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  public artistName: string;
  public albums: Array<any> = [];

  constructor(private _artistService: ArtistService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.artistName = this.route.snapshot.params['artistName'];
    this.getAlbums();
  }

  getAlbums() {
    console.log(this.artistName );
    this._artistService.getTopAlbums(this.artistName).then((albums) => {

        console.log(albums );
        this.albums = albums.topalbums.album.map((album) => {
          return {name: album.name, img: album.image[1]['#text']};
        });
    });
  }

}
