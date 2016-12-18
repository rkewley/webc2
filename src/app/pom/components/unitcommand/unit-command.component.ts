import {Component, Input} from "@angular/core"
import {MoveComponent} from "../move/move.component"
import {OrientComponent} from "../orient/orient.component"
import {TacticalAction} from "../../opord/Command"
import {C2MoveCDT} from "../move/C2MoveCDT"
import {C2OrientCDT} from "../orient/C2OrientCDT"
import {ActionTriggerCDT} from "../actiontrigger/ActionTriggerCDT"


@Component({
  selector: "unit-command",
  templateUrl: "./unit-command.html"
})
export class UnitCommandComponent {

  actionTypes: string[] = [
    "Move",
    "Orient"
  ]

  clearData(): void {
    this.tacticalAction.Move = undefined
    this.tacticalAction.Orient = undefined
  }

  actionSelected() {
    this.clearData()
    let trigger = new ActionTriggerCDT()
    switch(this.tacticalAction.ActionType) {
      case "Move":
            let move = new C2MoveCDT()
            move.ActionTrigger = trigger
            this.tacticalAction.Move = move
            break
      case "Orient":
        let orient = new C2OrientCDT()
            orient.ActionTrigger = trigger
            this.tacticalAction.Orient = orient
            break
      default:
    }
  }

  @Input()
  tacticalAction: TacticalAction

}
