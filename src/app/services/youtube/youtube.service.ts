import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { map } from "rxjs/operators";
import { environment } from "../../../environments/environment";
@Injectable({
  providedIn: "root"
})
export class YoutubeService {
  api_url = environment.api_url;
  api_key = environment.api_key;
  params = new HttpParams().set("key", this.api_key);
  constructor(private http: HttpClient) {}
  getVideosList() {
    return this.http
      .get(
        `${this.api_url}/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=RU`,
        { params: this.params }
      )
      .pipe(
        map((feed: any) => {
          return {
            items: feed.items,
            pageToken: {
              next: feed.nextPageToken
            }
          };
        })
      );
  }
  getFoundedVideos(title: string) {
    const regTitle = new RegExp(`${title}`, "i");
    return this.http
      .get(
        `${this.api_url}/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=RU`,
        { params: this.params }
      )
      .pipe(
        map((feed: any) =>
          feed.items.filter(item => regTitle.test(item.snippet.title))
        )
      );
  }
  loadPage(pageToken: string) {
    this.params.append("pageToken", pageToken);
    return this.http
      .get(
        `${this.api_url}/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=RU`,
        { params: this.params }
      )
      .pipe(
        map((feed: any) => {
          return {
            items: feed.items,
            pageToken: {
              next: feed.nextPageToken,
              prev: feed.prevPageToken
            }
          };
        })
      );
  }
}
