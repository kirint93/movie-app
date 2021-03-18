import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {MovieCardComponent} from "./components/movie-card/movie-card.component";
import {NavBarComponent} from "./components/nav-bar/nav-bar.component";
import { MovieListComponent } from './components/movie-list/movie-list.component';
import {MovieService} from "./movie.service";

@NgModule({
  declarations: [
    AppComponent,
    MovieCardComponent,
    NavBarComponent,
    MovieListComponent,
    
  ],
  imports: [
    BrowserModule,
    
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }