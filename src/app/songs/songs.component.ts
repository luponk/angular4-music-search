import { Component, OnInit } from '@angular/core';
import { SongService } from './song.service';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {
  public songs: Array<any> = [];
  public newSong: string;

  constructor(private _songService: SongService) { }

  ngOnInit() {
    this.getSongs();
  }

  getSongs() {
    this._songService.getSongs()
      .then((songs) => {this.songs = songs; })
      .catch(err => {
        console.log('Huston, we have a problem');
      });
  }

  public addSong() {
    this.songs.push({title: this.newSong});
  }
}
