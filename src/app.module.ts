import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FilmService } from './film/film.service';
import { FilmModule } from './film/film.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [FilmModule, UserModule],
  controllers: [AppController],
  providers: [AppService, FilmService],
})
export class AppModule {}
