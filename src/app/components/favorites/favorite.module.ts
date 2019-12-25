import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FavoritesComponent } from "./container/favorites.component";
import { FavoriteRoutingModule } from "./favorites.routing";
@NgModule({
  declarations: [FavoritesComponent],
  imports: [CommonModule, FavoriteRoutingModule]
})
export class FavoriteModule {}
