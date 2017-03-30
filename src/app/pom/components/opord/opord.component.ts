import {Component, Input} from "@angular/core"
import {PhaseComponent} from "../phase/phase.component"
import {OPORD, Phase, FRAGO, PhaseTrigger, } from "../../opord/Command"
import {TaskOrg, ForceSide, UnitAggregator} from "../taskorg/taskorg"


@Component({
  selector: "opord",
  templateUrl: "./opord.html"
})
export class OPORDComponent {
  
  json: string = ""
  buttonText: String = "Show OPORD JSON"
  
  createBlankPhase(): Phase {
    let newFrago: FRAGO = new FRAGO([])
    let newTrigger: PhaseTrigger = new PhaseTrigger()
    newTrigger.TriggerType = "Immediate"
    let newPhase: Phase = new Phase()
    newPhase.Branches = []
    newPhase.DefaultOrders = newFrago
    newPhase.PhaseName = "Phase"
    newPhase.PhaseNumber = 0
    newPhase.PhaseTrigger = newTrigger
    return newPhase
  }
  
  addPhase(): void {
    this.opord.Phases.push(this.createBlankPhase())
  }
  
  deletePhase(index: number): void {
    this.opord.Phases.splice(index, 1)
  }
  
  getUnitNames():string[] {
    return UnitAggregator.fsUnitList(this.forceSide)
  }
  
  toJson(): void {
    if (this.json === "") {
      this.json = JSON.stringify(this.opord, null, '\t')
      this.buttonText = "Hide OPORD JSON"
    } else {
      this.json = ""
      this.buttonText = "Show OPORD JSON"

    }
  }

  @Input()
  forceSide: ForceSide

  @Input()
  taskOrg: TaskOrg

  @Input()
  opord: OPORD

}
