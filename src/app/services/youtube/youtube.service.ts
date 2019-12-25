import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { environment } from "../../../environments/environment";
@Injectable({
  providedIn: "root"
})
export class YoutubeService {
  favorites: object[] = [];
  nextPage: string;
  prevPage: string;
  api_url = environment.api_url;
  api_key = environment.api_key;
  constructor(private http: HttpClient) {}
  getVideosList() {
    return this.http
      .get(
        `${this.api_url}/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=${this.api_key}`
      )
      .pipe(
        map((feed: any) => {
          this.nextPage = feed.nextPageToken;
          return feed.items;
        })
      );
  }
  getFoundedVideos(title: string) {
    const regTitle = new RegExp(`${title}`, "i");
    return this.http
      .get(
        `${this.api_url}/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=${this.api_key}`
      )
      .pipe(
        map((feed: any) =>
          feed.items.filter(item => regTitle.test(item.snippet.title))
        )
      );
  }
  addFavorite(item: {}): void {
    this.favorites.push(item);
    localStorage.setItem("favorites", JSON.stringify(this.favorites));
  }
  loadNextPage() {
    return this.http
      .get(
        `${this.api_url}/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&pageToken=${this.nextPage}&regionCode=US&key=${this.api_key}`
      )
      .pipe(
        map((feed: any) => {
          this.prevPage = feed.prevPageToken;
          this.nextPage = feed.nextPageToken;
          return feed.items;
        })
      );
  }
  loadPrevPage() {
    return this.http
      .get(
        `${this.api_url}/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&pageToken=${this.prevPage}&regionCode=US&key=${this.api_key}`
      )
      .pipe(
        map((feed: any) => {
          this.nextPage = feed.nextPageToken;
          this.prevPage = feed.prevPageToken;
          return feed.items;
        })
      );
  }
}
