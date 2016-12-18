import { Component, Input, OnChanges } from "@angular/core"
import { C2CommandScript, C2UnitCommandScript, Command } from "../../opord/Command"
import {TaskOrg, ForceSide} from "../taskorg/taskorg"
import {TacticalAction} from "../../opord/Command"


@Component({
  selector: "c2-command",
  templateUrl: "./command.html"
})
export class CommandComponent implements OnChanges {

  selectedAction: TacticalAction = undefined

  ngOnChanges(): void {
    this.selectedAction = undefined
  }

  commandTypes: string[] = [
    "Unit",
    "SingleEntity"
  ]

  clearData(): void {
    this.command.SingleEntityCommand = undefined
    this.command.UnitCommand = undefined
    this.command.SingleEntitySignal = undefined
    this.command.UnitSignal = undefined
  }

  commandSelected() {
    this.clearData()
    switch(this.command.CommandType) {
      case "Unit":
        let s = new C2UnitCommandScript()
        s.ScriptName = "New Command"
        s.UnitName = "Set Unit"
        this.command.UnitCommand = s
        break
      case "SingleEntity":
        let s2 = new C2CommandScript()
        s2.Receiver = "Set Receiver"
        s2.ScriptName = "New Command"
        this.command.SingleEntityCommand = s2
        break
      default:
    }
  }

  @Input()
  forceSide: ForceSide

  @Input()
  taskOrg: TaskOrg

  @Input()
  command: Command

}


