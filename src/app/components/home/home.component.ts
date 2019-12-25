import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { YoutubeService } from "../../services/youtube/youtube.service";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  pageCount: number = 0;
  videoList: object[] = [];
  thumbSize: string = "medium";
  form = new FormGroup({
    videoName: new FormControl("")
  });
  constructor(private service: YoutubeService) {}
  getVideosList(): void {
    this.service.getVideosList().subscribe((data: any) => {
      data.map((item: any) => {
        item.snippet.thumbnails = item.snippet.thumbnails[this.thumbSize].url;
        item.snippet.statistic = item.statistics;
        this.videoList = [...data.map((item: any) => item.snippet)];
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
  addFavorite(item): void {
    this.service.addFavorite(item);
  }
  loadPrevPage(): void {
    this.pageCount--;
    this.service.loadPrevPage().subscribe((data: any) => {
      data.map((item: any) => {
        item.snippet.thumbnails = item.snippet.thumbnails[this.thumbSize].url;
        item.snippet.statistic = item.statistics;
        this.videoList = [...data.map((item: any) => item.snippet)];
      });
    });
  }
  loadNextPage(): void {
    this.pageCount++;
    this.service.loadNextPage().subscribe((data: any) => {
      data.map((item: any) => {
        item.snippet.thumbnails = item.snippet.thumbnails[this.thumbSize].url;
        item.snippet.statistic = item.statistics;
        this.videoList = [...data.map((item: any) => item.snippet)];
      });
    });
  }
  ngOnInit() {
    this.getVideosList();
  }
}
