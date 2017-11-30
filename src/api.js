export const search = query =>
  fetch(`http://api.tvmaze.com/search/shows?q=${query}`, {
    method: "GET",
    mode: "cors"
  })
    .then(response => response.json())
    .then(shows => shows.map(show => show.show));

export const tvShow = showId =>
  fetch(`http://api.tvmaze.com/shows/${showId}?embed=cast`, {
    method: "GET",
    mode: "cors"
  }).then(response => response.json());
