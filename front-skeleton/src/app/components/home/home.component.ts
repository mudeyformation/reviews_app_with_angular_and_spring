import { Component, OnInit } from "@angular/core"
import { Movie } from "models/movie.model"
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import movies from "datas/movies";
import { localDb } from "db/local";
import { Review } from "models/review.model";


@Component({
  selector: "home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  popularReviews: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.loadPopularReviews();
  }

  async loadPopularReviews() {
    this.popularReviews =  await localDb.getAllData('review')
  }
  
}
