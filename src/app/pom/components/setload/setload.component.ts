import { Component, Input, OnInit } from "@angular/core"
import { ActionTriggerComponent } from "../actiontrigger/actiontrigger.component"
import { C2SetLoadCDT } from "./C2SetLoadCDT"


/* tslint:disable:no-unused-labels */


@Component({
  selector: "c2-setload",
  templateUrl: "./setload.html",
})
export class SetLoadComponent {
  
  loadNames: Array<string> = [
    "FightingLoad",
    "ApproachLoad",
    "EmergencyApproachLoad"
  ]

  @Input()
  setLoad: C2SetLoadCDT
}


