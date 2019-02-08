import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class PlayerNameService {
  playerName: string = "";
  currentPlayerName: any = "";

  constructor() {}
}
