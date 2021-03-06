import { Component, OnInit } from '@angular/core';
import {IMovie, movieArray} from "src/assets/movies"; 
import { MovieService } from 'src/app/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  movieArray: IMovie[] = [];

  constructor(private _movieService: MovieService) { }

  ngOnInit(): void {
    this.movieArray = this._movieService.getMovie();
  }

}
