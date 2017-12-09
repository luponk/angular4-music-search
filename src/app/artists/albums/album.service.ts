import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import {environment} from './../../../environments/environment';

@Injectable()
export class AlbumService {

  constructor(private _http: Http) { }

  getAlbumDetails(artist, album) {
    return this._http.get(environment.lastFMUrl + environment.lastFMAlbumDetails
        .replace('ARTIST_NAME', artist)
        .replace('ALBUM_NAME', album))
      .map((response) => {
        return response.json();
      }).toPromise();

  }
}
