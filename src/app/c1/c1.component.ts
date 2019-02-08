import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-c1",
  templateUrl: "./c1.component.html",
  styleUrls: ["./c1.component.css"]
})
// @Directive({
//   selector: "[color]"
// })
export class C1Component implements OnInit {
  @Input() color: boolean;
  filledcolor;

  ngOnChanges() {
    if (this.color == true) {
      this.filledcolor = "red";
    } else {
      this.filledcolor = "white";
    }
  }

  // onclick() {
  //   if (color == true) {

  //   }
  // }

  constructor() {}

  ngOnInit() {}
}
