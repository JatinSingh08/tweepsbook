const { api } = require("./constants");

export const fetchMovies = () =>
  fetch(api, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZWM2NTI3MGMxYmJhZmExNDUyNGVhNDQxNzQwNjJhOCIsInN1YiI6IjYyODBiOWU2ZGNmODc1MzM0ZTQ1N2NiZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._ueveNAVwEPen0kwpg_VnaNg6iqUGA9av6BzNzHxzlg",
    },
  }).then((response) => response.json());
