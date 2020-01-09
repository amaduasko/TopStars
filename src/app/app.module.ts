import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./container/app.component";
import { HttpClientModule } from "@angular/common/http";
import { HomeModule } from "./modules/home/home.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    HomeModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
