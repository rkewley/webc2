import {Component, Input} from "@angular/core"
import {Phase, PhaseTrigger} from "../../opord/Command"
import {TaskOrg, ForceSide} from "../taskorg/taskorg"



@Component({
  selector: "phase",
  templateUrl: "./phase.html"
})
export class PhaseComponent {

  phaseTriggerTypes: string[] = [
    "Delay",
	  "Immediate",
	  "Information",
	  "Signal"
  ]

  @Input()
  forceSide: ForceSide

  @Input()
  taskOrg: TaskOrg

  @Input()
  phase: Phase

}
