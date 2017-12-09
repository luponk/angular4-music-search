import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment'

@Injectable()
export class SongService {

  private songsList: Array<string> = [
    'cancion 1',
    'cancion 1',
    'cancion 1'];

  constructor(private _http: Http) { }

  getSongs() {
    return this._http.get(environment.apiUrl)
      .map(responsse => responsse.json()).toPromise();
  }
}
