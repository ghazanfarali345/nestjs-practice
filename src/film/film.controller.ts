import { Controller, Get, Post, Body } from '@nestjs/common';
import { FilmService } from './film.service';

import { FilmDocumentType } from './film.schema';
import { newFilmDTO } from './dtos/new-film.dto';

@Controller('film')
export class FilmController {
  constructor(private readonly filmService: FilmService) {}

  @Post()
  async createFilmHandler(@Body() body: newFilmDTO): Promise<FilmDocumentType> {
    return this.filmService.createFilm(body);
  }
  @Get()
  async getFilmListHandler(): Promise<FilmDocumentType[]> {
    return this.filmService.getAllFilms();
  }
}
