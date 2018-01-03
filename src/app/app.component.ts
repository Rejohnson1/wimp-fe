
import { Component, OnInit } from '@angular/core';
import { wimpService } from './wimp.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  movies;
  actors;
 
  constructor(private wimpservice: wimpService){}

  getMovies(){

    this.wimpservice.getRecords("movies")
      .subscribe(moviesFromAPI => {
        this.movies = moviesFromAPI;
      })
  }

onSubmitMovie(movieData: NgForm) {
  this.wimpservice.addRecord("movies", movieData.value)
  .subscribe(addMovie => {
    this.getMovies();
    movieData.reset()
  })
}
 
onSubmitActor(actorData: NgForm) {
  this.wimpservice.addRecord("actors", actorData.value)
  .subscribe(addActor => {
    this.getActors();
    actorData.reset()
  })
}


  getActors(){
          this.wimpservice.getRecords("actors")
          .subscribe(actorsFromAPI => {
            this.actors = actorsFromAPI;
          })
    
      }

  ngOnInit(){
    this.getMovies();
    this.getActors();
  }

}