import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../album.service';

import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  public artistName: string;
  public albumName: string;
  public album: any = {};

  constructor(private _albumService: AlbumService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.artistName = this.route.snapshot.params['artistName'];
    this.albumName = this.route.snapshot.params['albumName'];
    this.getAlbumDetails();
  }

  getAlbumDetails() {
    this._albumService.getAlbumDetails(this.artistName, this.albumName).then((details) => {

      console.log(details );
      if (details.album !== undefined) {
        this.album = {
          name: details.album.name,
          img: details.album.image[3]['#text'],
          songs: details.album.tracks.track.map((s) => {
            const date = new Date(null);
            date.setSeconds(s.duration); // specify value for SECONDS here
            const result = date.toISOString().substr(14, 5);
            return {
              name: s.name,
              duration: result
            };
          }),
          summary: details.album.wiki.summary,
          description: details.album.wiki.content
        };
        console.log(this.album);
      } else {
        console.log("Album no encontrado");
      }
    });
  }

}
