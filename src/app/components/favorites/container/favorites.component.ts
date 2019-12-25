import { Component, OnInit } from "@angular/core";
@Component({
  selector: "app-favorites",
  templateUrl: "./favorites.component.html",
  styleUrls: ["./favorites.component.scss"]
})
export class FavoritesComponent implements OnInit {
  favorites: object[];
  constructor() {
    this.favorites = localStorage.getItem("favorites")
      ? [...JSON.parse(localStorage.getItem("favorites"))]
      : [];
  }
  clearFavorite(): void {
    this.favorites = [];
    localStorage.clear();
  }

  ngOnInit() {}
}
