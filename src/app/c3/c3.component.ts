import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-c3",
  templateUrl: "./c3.component.html",
  styleUrls: ["./c3.component.css"]
})
export class C3Component implements OnInit {
  @Input() color: boolean;
  filledcolor;

  ngOnChanges() {
    if (this.color == true) {
      this.filledcolor = "red";
    } else {
      // console.log("galat che");
      this.filledcolor = "white";
    }
  }

  constructor() {}

  ngOnInit() {}
}
