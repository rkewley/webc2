import {Component, Input} from "@angular/core"
import {MoveComponent} from "../move/move.component"
import {OrientComponent} from "../orient/orient.component"
import {TacticalAction} from "../../opord/Command"
import {C2MoveCDT} from "../move/C2MoveCDT"
import {C2OrientCDT} from "../orient/C2OrientCDT"
import {C2MountCDT} from "../mount/C2MountCDT"
import {C2DismountCDT} from "../dismount/C2DismountCDT"
import {C2ObserveCDT} from "../observe/C2ObserveCDT"
import {C2SetLoadCDT} from "../setload/C2SetLoadCDT"
import {ActionTriggerCDT} from "../actiontrigger/ActionTriggerCDT"
import {UnitAggregator, TaskOrg, ForceSide} from "../taskorg/taskorg"


@Component({
  selector: "unit-command",
  templateUrl: "./unit-command.html"
})
export class UnitCommandComponent {

  actionTypes: string[] = [
    "Move",
    "Orient",
    "Mount",
    "Observe",
    "Dismount",
    "Set Load"
  ]

  clearData(): void {
    this.tacticalAction.Move = undefined
    this.tacticalAction.Orient = undefined
    this.tacticalAction.Observe = undefined
    this.tacticalAction.Mount = undefined    
    this.tacticalAction.Dismount = undefined    
    this.tacticalAction.SetLoad = undefined
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
      case "Observe":
            let observe = new C2ObserveCDT()
            observe.ActionTrigger = trigger
            this.tacticalAction.Observe = observe
            break
      case "Mount":
        let mount = new C2MountCDT()
            mount.ActionTrigger = trigger
            this.tacticalAction.Mount = mount
            break   
      case "Dismount":
        let dismount = new C2DismountCDT()
            dismount.ActionTrigger = trigger
            this.tacticalAction.Dismount = dismount
            break   
      case "Set Load":
        let setLoad = new C2SetLoadCDT()
            setLoad.ActionTrigger = trigger
            this.tacticalAction.SetLoad = setLoad
            break             
      default:
    }
  }

  @Input()
  forceSide: ForceSide

  @Input()
  taskOrg:TaskOrg
  
  @Input()
  tacticalAction: TacticalAction

}
