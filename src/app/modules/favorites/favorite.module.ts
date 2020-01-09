import { NgModule } from "@angular/core";
import { FavoritesComponent } from "./container/favorites.component";
import { FavoriteRoutingModule } from "./favorites.routing";
import { CardModule } from "../card/card.module";

@NgModule({
  declarations: [FavoritesComponent],
  imports: [FavoriteRoutingModule, CardModule]
})
export class FavoriteModule {}
