export const fetchTvShowsByName = query =>
  fetch(`https://api.tvmaze.com/search/shows?q=${query}`, {
    method: 'GET',
    mode: 'cors'
  })
    .then(response => response.json())
    .then(shows => shows.map(show => show.show));

export const getTvShowById = showId =>
  fetch(`https://api.tvmaze.com/shows/${showId}?embed=cast`, {
    method: 'GET',
    mode: 'cors'
  }).then(response => response.json());
