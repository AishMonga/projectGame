import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PlayerDetailsComponent } from "./player-details/player-details.component";
import { HomeComponent } from "./home/home.component";
import { GameComponent } from "./game/game.component";
import { ScoreComponent } from "./score/score.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "player-details", component: PlayerDetailsComponent },
  { path: "", component: HomeComponent },
  { path: "game", component: GameComponent },
  { path: "score", component: ScoreComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [HomeComponent, PlayerDetailsComponent];
