import React from 'react';

const Film = ({ film }) => {
  return (
    <li key={film._id}>
      {film.filmTitle}
    </li>
  );
}

export default Film;
