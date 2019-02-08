import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { PlayerNameService } from "../player-name.service";
import { Player } from "../player-details/player";
@Component({
  selector: "app-game",
  templateUrl: "./game.component.html",
  styleUrls: ["./game.component.css"]
})
export class GameComponent implements OnInit {
  timeLeft: number = 10; // actual 60
  interval;
  score: number = 0;
  // show: boolean = true;

  // ch1: boolean = false;
  // ch2: boolean = false;
  // ch3: boolean = false;
  // ch4: boolean = false;
  ch1: boolean = false;
  ch2: boolean = false;
  ch3: boolean = false;
  ch4: boolean = false;
  timeDuration = 1000;

  constructor(
    private router: Router,
    private _playerName: PlayerNameService,
    private http: HttpClient
  ) {}

  // ngOnInit() {
  //   this.startTimer();
  // }
  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
        this.colorChangeOnClick();
      } else {
        clearInterval(this.interval);
        this.postData();
      }
    }, this.timeDuration);
  }

  ngOnInit() {
    this.startTimer();
  }

  colorChangeOnClick() {
    this.ch1 = false;
    this.ch2 = false;
    this.ch3 = false;
    this.ch4 = false;

    let randNum = Math.floor(Math.random() * 4 + 1);

    console.log(randNum);
    if (randNum == 1) {
      this.ch1 = true;
    } else if (randNum == 2) {
      this.ch2 = true;
    } else if (randNum == 3) {
      this.ch3 = true;
    } else {
      this.ch4 = true;
    }
  }

  onClick(x: boolean) {
    if (x) {
      this.score += 10;
      console.log("score is ", this.score);
      this.colorChangeOnClick();
      if (this.score > 30 && this.score < 60) {
        clearInterval(this.interval);
        this.timeDuration = 800;
        this.startTimer();
      } else if (this.score > 60 && this.score < 90) {
        clearInterval(this.interval);
        this.timeDuration = 700;
        this.startTimer();
      } else if (this.score > 90) {
        clearInterval(this.interval);
        this.timeDuration = 500;
        this.startTimer();
      }
    }
  }
  postData() {
    console.log(this._playerName.playerName);

    let playerDetail: Player = {
      name: this._playerName.playerName,
      score: this.score
    };
    this._playerName.currentPlayerName = playerDetail;
    this.router.navigate(["game"]);

    return this.http
      .post("http://localhost:3004/posts", playerDetail)
      .subscribe((data: any) => {
        console.log(data);
        this.router.navigate(["/", "score"]);
      });
  }
}
// startTimer() {
//   this.ch1 = false;
//   this.ch2 = false;
//   this.ch3 = false;
//   this.ch4 = false;
//   this.interval = setInterval(() => {
//     if (this.timeLeft > 0) {
//       this.timeLeft--;
//       console.log(this.timeLeft);

//       let randomVal = Math.floor(Math.random() * 4) + 1;

//       if (randomVal == 1) {
//         return (this.ch1 = true);
//       } else if (randomVal == 2) {
//         return (this.ch2 = true);
//       } else if (randomVal == 3) {
//         return (this.ch3 = true);
//       } else {
//         return (this.ch4 = true);
//       }
//     } else {
//       console.log(this.timeLeft);
//       clearInterval(this.interval);
//       this.router.navigate(["/", "score"]);
//     }
//   }, 1000);
// }
