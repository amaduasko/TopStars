import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PagenotfoundComponent } from "./container/pagenotfound.component";
import { PageNotFoundRoutingModule } from "./pagenotfound.routing";
@NgModule({
  declarations: [PagenotfoundComponent],
  imports: [CommonModule, PageNotFoundRoutingModule]
})
export class PagenotfoundModule {}
