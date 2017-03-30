import { Component, Input } from "@angular/core"
import { FRAGO, Command, C2UnitCommandScript } from "../../opord/Command"
import {TaskOrg, ForceSide} from "../taskorg/taskorg"


@Component({
  selector: "c2-frago",
  templateUrl: "./frago.html",
  styles: ["#frago-edit {background-color:#e8d9c5;} #command-edit {background-color:#f2f2f2;}"]
})
export class FragoComponent {

  selectedCommand: Command
  //json: string = ""
  //buttonText: String = "Show FRAGO JSON"

  deleteCommand(commandIndex: number) {
    this.frago.commands.splice(commandIndex, 1)
  }

  clickCommand(c: Command): void {
    this.selectedCommand = c
  }

  addCommand() {
    let command = new Command()
    let s = new C2UnitCommandScript()
    s.ScriptName = "New Command"
    s.UnitName = "Set Unit"
    command.CommandType = "Unit"
    command.UnitCommand = s
    this.frago.commands.push(command)
    this.selectedCommand = command
  }
 
  /*
  toJson(): void {
    if (this.json === "") {
      this.json = JSON.stringify(this.frago, null, '\t')
      this.buttonText = "Hide FRAGO JSON"
    } else {
      this.json = ""
      this.buttonText = "Show FRAGO JSON"

    }
  }
  */

  @Input()
  forceSide: ForceSide

  @Input()
  taskOrg: TaskOrg

  @Input()
  frago: FRAGO

}


