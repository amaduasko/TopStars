import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { YoutubeService } from "../../../services/youtube/youtube.service";
import { FavoritesService } from "src/app/services/favorites/favorites.service";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  prevPageToken: string;
  nextPageToken: string;
  videoList: object[] = [];
  thumbSize: string = "medium";
  prev(a) {
    return !a;
  }
  form = new FormGroup({
    videoName: new FormControl("")
  });
  constructor(
    private service: YoutubeService,
    private favorite: FavoritesService
  ) {}
  getVideosList(): void {
    this.service.getVideosList().subscribe((data: any) => {
      this.nextPageToken = data.pageToken.next;
      data.items.map((item: any) => {
        this.favorite.favorites.filter((favItem: any) => favItem.id == item.id)
          .length
          ? (item.snippet.isFavorite = true)
          : (item.snippet.isFavorite = false);
        item.snippet.id = item.id;
        item.snippet.thumbnails = item.snippet.thumbnails[this.thumbSize].url;
        item.snippet.statistic = item.statistics;
        this.videoList = [...data.items.map((item: any) => item.snippet)];
      });
    });
  }
  videoLookUp(event: any): void {
    this.service.getFoundedVideos(event.target.value.trim()).subscribe(data => {
      data.map((item: any) => {
        item.snippet.thumbnails = item.snippet.thumbnails[this.thumbSize].url;
        item.snippet.statistic = item.statistics;
      });
      this.videoList = [...data.map((item: any) => item.snippet)];
    });
  }
  loadPage(pageToken: string): void {
    this.service.loadPage(pageToken).subscribe((data: any) => {
      this.nextPageToken = data.pageToken.next;
      this.prevPageToken = data.pageToken.prev;
      data.items.map((item: any) => {
        item.snippet.thumbnails = item.snippet.thumbnails[this.thumbSize].url;
        item.snippet.statistic = item.statistics;
        this.videoList = [...data.items.map((item: any) => item.snippet)];
      });
    });
  }
  handleFavoriteActions(item): void {
    item.isFavorite = this.prev(item.isFavorite);
    item.isFavorite
      ? this.favorite.addFavorite(item)
      : this.favorite.removeFavorite(item);
  }
  ngOnInit() {
    this.getVideosList();
  }
}
