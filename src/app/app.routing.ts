import {RouterModule, Routes} from '@angular/router';

import {SongsComponent} from './songs/songs.component';
import {ArtistsComponent} from './artists/artists.component';
import {AlbumsComponent} from './artists/albums/albums.component';
import {DetailsComponent} from './artists/albums/details/details.component';

const APP_ROUTES: Routes = [
  {path: '', component: SongsComponent},
  {path: 'artists', component: ArtistsComponent},
  {path: 'artists/:artistName/albums', component: AlbumsComponent},
  {path: 'artists/:artistName/albums/:albumName', component: DetailsComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
