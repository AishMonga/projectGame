import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { PlayerNameService } from "../player-name.service";

// import { AngularWaitBarrier } from "blocking-proxy/built/lib/angular_wait_barrier";
// import { NgModule } from "@angular/core";
@Component({
  selector: "app-score",
  templateUrl: "./score.component.html",
  styleUrls: ["./score.component.css"]
})
export class ScoreComponent implements OnInit {
  public data: any;
  constructor(
    private http: HttpClient,
    private currentPlayer: PlayerNameService
  ) {}

  crtPlayer = this.currentPlayer.currentPlayerName;

  scoreArr: any;

  ngOnInit() {
    return this.http
      .get("http://localhost:3004/posts", { responseType: "json" })
      .subscribe(response => {
        this.data = response;
        console.log("data :" + response);
        this.data.sort((a, b) => b.score - a.score);
      });
  }
}

// ngOnInit() {
//   return this.http.get("http://localhost:3004/posts").subscribe(console.log);
// }
