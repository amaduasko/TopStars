import { Component, OnInit } from "@angular/core";
import { FavoritesService } from "src/app/services/favorites/favorites.service";
@Component({
  selector: "app-favorites",
  templateUrl: "./favorites.component.html",
  styleUrls: ["./favorites.component.scss"]
})
export class FavoritesComponent implements OnInit {
  favorites: object[];
  constructor(public favorite: FavoritesService) {}
  getFavorites(): void {
    this.favorite.getFavorites();
    this.favorites = this.favorite.favorites;
  }
  ngOnInit() {
    this.getFavorites();
  }
  removeItem(itemToRemove) {
    this.favorites = this.favorite.removeFavorite(itemToRemove);
  }
}
