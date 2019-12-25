import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "favorites",
    loadChildren: () =>
      import("./components/favorites/favorite.module").then(
        module => module.FavoriteModule
      )
  },
  {
    path: "**",
    loadChildren: () =>
      import("./components/pagenotfound/pagenotfound.module").then(
        module => module.PagenotfoundModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
