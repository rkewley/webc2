import { Component, Input } from "@angular/core"
import { Soldier } from "../taskorg"

@Component({
  selector: "taskorg-soldier",
  templateUrl: "./soldier.html"
})
export class SoldierComponent {

  @Input()
  soldier: Soldier
}


