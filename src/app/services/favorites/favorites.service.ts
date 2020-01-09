import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class FavoritesService {
  favorites: object[] = [];
  constructor() {}

  addFavorite(item): void {
    item.isFavorite = true;
    this.favorites.push(item);
    localStorage.setItem("favorites", JSON.stringify(this.favorites));
  }
  getFavorites() {
    this.favorites = localStorage.getItem("favorites")
      ? [...JSON.parse(localStorage.getItem("favorites"))]
      : [];
  }
  removeFavorite(itemToRemove: any) {
    this.favorites = [
      ...this.favorites.filter((item: any) => item.id !== itemToRemove.id)
    ];
    localStorage.setItem("favorites", JSON.stringify(this.favorites));
    return this.favorites;
  }
  clearFavorites(): void {
    localStorage.clar();
  }
}
