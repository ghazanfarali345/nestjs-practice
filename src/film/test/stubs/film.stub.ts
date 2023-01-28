import { Film } from 'src/film/film.schema';

export const filmStub = (): Film => {
  return {
    userId: '',
    title: 'Baaghi',
    release_year: '2014-05-25',
    actors: ['Tiger shrof', 'Sharadha kapoor'],
    director: 'xyz',
  };
};
