import { Component, Input, SimpleChanges } from "@angular/core"
import { C2UnitCommandScript, TacticalAction } from "../../opord/Command"
import {UnitAggregator, TaskOrg, ForceSide} from "../taskorg/taskorg"
import {ActionTriggerCDT} from "../actiontrigger/ActionTriggerCDT"
import {C2MoveCDT} from "../move/C2MoveCDT"


@Component({
  selector: "c2-unit-command-script",
  templateUrl: "./unit-command-script.html",
  styles: ["#action-edit {background-color:#e8d9c5;}"]

})
export class UnitCommandScriptComponent {

  getUnitNames():string[] {
    return UnitAggregator.fsUnitList(this.forceSide)
  }

  getEntityNames():string[] {
    return UnitAggregator.fsEntityList(this.forceSide)
  }

  deleteAction(actionIndex:number) {
    this.unitCommandScript.TacticalActions.splice(actionIndex, 1)
  }

  clickAction(a:TacticalAction):void {
    this.selectedAction = a
  }

  addAction() {
    let action = new TacticalAction()
    this.unitCommandScript.TacticalActions.push(action)
    this.selectedAction = action
  }
  
  ngOnChanges(changes: SimpleChanges) {
    this.unitCommandScript.Receiver = this.unitCommandScript.UnitName
  }

  @Input()
  forceSide: ForceSide

  @Input()
  taskOrg:TaskOrg

  @Input()
  unitCommandScript:C2UnitCommandScript

  @Input()
  selectedAction:TacticalAction
}
