import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Player } from "./player";
import { PlayerNameService } from "../player-name.service";

@Component({
  selector: "app-player-details",
  templateUrl: "./player-details.component.html",
  styleUrls: ["./player-details.component.css"]
})
export class PlayerDetailsComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private router: Router,
    private _playerName: PlayerNameService
  ) {}

  ngOnInit() {}

  // onClick(value) {
  //   console.log("click works!");
  //   console.log(value);
  //   // console.log(event.target.id);
  // }

  onClickPlay(playerInfo: string): any {
    this._playerName.playerName = playerInfo;
    this.router.navigate(["game"]);
    // let playerDetail: Player = {
    //   name: playerInfo,
    //   score: 0
    // };
    //

    // return this.http
    //   .post("http://localhost:3004/posts", playerDetail)
    //   .subscribe(console.log);
  }
}
