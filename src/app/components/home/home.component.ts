import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { YoutubeService } from "../../services/youtube.service";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  videoList: object[] = [];
  form = new FormGroup({
    videoName: new FormControl("")
  });
  constructor(private service: YoutubeService) {}
  getVideosList(thumbSize: string) {
    this.service.getVideosList().subscribe((data: any) => {
      data.map((item: any) => {
        item.thumbnails = item.thumbnails[thumbSize].url;
        this.videoList.push(item);
      });
    });
  }
  ngOnInit() {
    this.getVideosList("medium");
    console.log(this.videoList);
  }
}
