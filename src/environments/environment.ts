// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  apiUrl: 'https://jsonplaceholder.typicode.com/albums',
  apiKey: '3c8434b12fecd2bb06737071df65d898',
  lastFMUrl: 'http://ws.audioscrobbler.com/2.0/?',
  lastFMArtistSearch: 'method=artist.search&artist=SEARCH_STRING&api_key=3c8434b12fecd2bb06737071df65d898&format=json',
  lastFMArtistTopAlbums: 'method=artist.gettopalbums&artist=SEARCH_STRING&api_key=3c8434b12fecd2bb06737071df65d898&format=json',
  lastFMAlbumDetails: 'method=album.getinfo&api_key=3c8434b12fecd2bb06737071df65d898&artist=ARTIST_NAME&album=ALBUM_NAME&format=json'
};
