import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Delete,
  Param,
} from '@nestjs/common';
import { FilmService } from './film.service';

import { FilmDocumentType } from './film.schema';
import { newFilmDTO } from './dtos/new-film.dto';
import { existingFilmDTO } from './dtos/existing-film.dto';
import { Types } from 'mongoose';

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

  @Put()
  async filmUpdateHandler(
    @Body() body: existingFilmDTO,
  ): Promise<FilmDocumentType> {
    return this.filmService.updateFilm(body);
  }

  @Delete()
  async filmDeleteHandler(@Param() title: string): Promise<FilmDocumentType> {
    return this.filmService.deleteFilm(title);
  }
}
