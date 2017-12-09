import { routing } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BsDropdownModule } from 'ng-bootstrap/dropdown';
import { TooltipModule } from 'ng-bootstrap/tooltip';
import { ModalModule } from 'ng-bootstrap/modal';


import { AppComponent } from './app.component';
import { SongsComponent } from './songs/songs.component';
import { SongService } from './songs/song.service';
import { AlbumService } from './artists/albums/album.service';
import { ArtistsComponent } from './artists/artists.component';
import { ArtistService } from './artists/artist.service';
import { AlbumsComponent } from './artists/albums/albums.component';
import { DetailsComponent } from './artists/albums/details/details.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    SongsComponent,
    ArtistsComponent,
    AlbumsComponent,
    DetailsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [SongService, ArtistService, AlbumService],
  bootstrap: [AppComponent]
})
export class AppModule { }
