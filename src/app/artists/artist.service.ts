import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import {environment} from './../../environments/environment';

@Injectable()
export class ArtistService {

  constructor(private _http: Http) {

  }

  searchArtists(term) {
    return this._http.get(environment.lastFMUrl + environment.lastFMArtistSearch.replace('SEARCH_STRING', term))
      .map(responsse => responsse.json()).toPromise();
  }

  getTopAlbums(artist) {
    return this._http.get(environment.lastFMUrl + environment.lastFMArtistTopAlbums.replace('SEARCH_STRING', artist))
      .map(responsse => responsse.json()).toPromise();

  }
}
