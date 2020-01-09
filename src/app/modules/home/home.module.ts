import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { HomeComponent } from "./container/home.component";
import { CardModule } from "../card/card.module";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [HomeComponent],
  imports: [ReactiveFormsModule, RouterModule, CardModule]
})
export class HomeModule {}
