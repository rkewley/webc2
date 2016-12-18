import { Component, Input } from "@angular/core"
import { ActionTriggerCDT } from "./ActionTriggerCDT"

/* tslint:disable:no-unused-labels */



@Component({
  selector: "action-trigger",
  templateUrl: "./action-trigger.html",
})


export class ActionTriggerComponent {

  triggerTypes: Array<String> = [ "ASAP",
    "AfterDelay",
    "CompletionOfPrevious",
    "Signal"]

  @Input()
  selectedTrigger: ActionTriggerCDT
}

