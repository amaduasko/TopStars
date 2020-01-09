import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./modules/home/container/home.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "favorites",
    loadChildren: () =>
      import("./modules/favorites/favorite.module").then(
        module => module.FavoriteModule
      )
  },
  {
    path: "**",
    loadChildren: () =>
      import("./modules/pagenotfound/pagenotfound.module").then(
        module => module.PagenotfoundModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
