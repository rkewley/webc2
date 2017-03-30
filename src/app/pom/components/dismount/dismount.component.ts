import { Component, Input } from "@angular/core"
import { C2DismountCDT } from "./C2DismountCDT"

@Component({
  selector: "c2-dismount",
  templateUrl: "./dismount.html"
})
export class DismountComponent {


  @Input()
  dismount: C2DismountCDT
}


