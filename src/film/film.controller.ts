import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Delete,
  Param,
  Inject,
} from '@nestjs/common';
import { Logger } from 'winston';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { FilmService } from './film.service';
import { FilmDocumentType } from './film.schema';
import { newFilmDTO } from './dtos/new-film.dto';
import { existingFilmDTO } from './dtos/existing-film.dto';
import { LoggerService } from '@nestjs/common/services';

@Controller('film')
export class FilmController {
  constructor(
    private readonly filmService: FilmService,
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,
  ) {}

  @Post()
  async createFilmHandler(@Body() body: newFilmDTO): Promise<FilmDocumentType> {
    return this.filmService.createFilm(body);
  }
  @Get()
  async getFilmListHandler(): Promise<FilmDocumentType[]> {
    this.logger.log('list of films', FilmController.name);
    return this.filmService.getAllFilms();
  }

  @Put()
  async filmUpdateHandler(
    @Body() body: existingFilmDTO,
  ): Promise<FilmDocumentType> {
    return this.filmService.updateFilm(body);
  }

  // @Delete()
  // async filmDeleteHandler(@Param() title: string): Promise<FilmDocumentType> {
  //   return this.filmService.deleteFilm(title);
  // }
}
