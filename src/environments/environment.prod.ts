export const environment = {
  production: true,
  apiUrl: 'https://jsonplaceholder.typicode.com/albums',
  apiKey: '3c8434b12fecd2bb06737071df65d898',
  lastFMUrl: 'http://ws.audioscrobbler.com/2.0/?',
  lastFMArtistSearch: 'method=artist.search&artist=SEARCH_STRING&api_key=3c8434b12fecd2bb06737071df65d898&format=json',
  lastFMArtistTopAlbums: 'method=artist.gettopalbums&artist=SEARCH_STRING&api_key=3c8434b12fecd2bb06737071df65d898&format=json',
  lastFMAlbumDetails: 'method=album.getinfo&api_key=3c8434b12fecd2bb06737071df65d898&artist=ARTIST_NAME&album=ALBUM_NAME&format=json'
};
