import { Component, Input } from "@angular/core"
import { C2CommandScript, TacticalAction } from "../../opord/Command"
import {UnitAggregator, TaskOrg, ForceSide} from "../taskorg/taskorg"


@Component({
  selector: "c2-entity-command-script",
  templateUrl: "./entity-command-script.html"
})
export class EntityCommandScriptComponent {

  getUnitNames(): string[] {
    return UnitAggregator.fsUnitList(this.forceSide)
  }

  getEntityNames(): string[] {
    return UnitAggregator.fsEntityList(this.forceSide)
  }

  deleteAction(actionIndex: number) {
    this.commandScript.TacticalActions.splice(actionIndex, 1)
  }

  clickAction(a: TacticalAction): void {
    this.selectedAction = a
  }

  addAction() {
    let action = new TacticalAction()
    this.commandScript.TacticalActions.push(action)
    this.selectedAction = action
  }

  @Input()
  forceSide: ForceSide

  @Input()
  taskOrg: TaskOrg

  @Input()
  commandScript: C2CommandScript


  @Input()
  selectedAction:TacticalAction

}


