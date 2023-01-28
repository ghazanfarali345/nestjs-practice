import { filmStub } from '../test/stubs/film.stub';

export const FilmServiceMock = jest.fn().mockReturnValue({
  getAllFilms: jest.fn().mockResolvedValue([filmStub()]),
  createFilm: jest.fn().mockResolvedValue(filmStub()),
  updateFilm: jest.fn().mockResolvedValue(filmStub()),
});
