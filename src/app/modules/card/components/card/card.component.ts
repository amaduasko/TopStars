import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"]
})
export class CardComponent implements OnInit {
  favLogo: string = "../../../assets/images/love.svg";
  addedFavLogo: string = "../../../assets/images/love-fav.svg";
  @Input() item: any;
  @Output() itemSelect = new EventEmitter();
  constructor() {}
  itemSelected(item) {
    this.itemSelect.emit(item);
  }
  ngOnInit() {}
}
