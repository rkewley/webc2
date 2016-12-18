import { Component, Input } from "@angular/core"
import { C2OrientCDT } from "./C2OrientCDT"
import { ActionTriggerComponent } from "../actiontrigger/actiontrigger.component"


@Component({
  selector: "c2-orient",
  templateUrl: "./orient.html"
})
export class OrientComponent {

  @Input()
  orient: C2OrientCDT
}


