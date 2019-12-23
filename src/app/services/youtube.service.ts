import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class YoutubeService {
  api_url = environment.api_url;
  api_key = environment.api_key;
  constructor(private http: HttpClient) {}
  getVideosList() {
    return this.http
      .get(
        `${this.api_url}/videos?part=snippet&chart=mostPopular&maxResults=50&regionCode=US&key=${this.api_key}`
      )
      .pipe(map((feed: any) => feed.items.map(item => item.snippet)));
  }
}
