import { Component, Input, OnInit } from "@angular/core"
import { ActionTriggerComponent } from "../actiontrigger/actiontrigger.component"
import { C2MoveCDT } from "./C2MoveCDT"
import {GraphicService} from "../../services/graphicservice/graphic.service"
import {TacticalGraphic} from "../../opord/TacticalGraphic"


/* tslint:disable:no-unused-labels */


@Component({
  selector: "c2-move",
  templateUrl: "./move.html",
  providers: [GraphicService]
})
export class MoveComponent implements OnInit {

  ngOnInit(): void {
    this.getGraphics()
  }

  graphics: TacticalGraphic[]

  constructor(private graphicService: GraphicService) { }

  getGraphics(): void {
    this.graphicService.getGraphics().then(gr => this.graphics = gr)
  }


  formationNames: Array<String> = [
    "ASSAULT_VEE",
    "COLUMN",
    "ECHELON_LEFT",
    "ECHELON_RIGHT",
    "FSE_COLUMN",
    "LINE",
    "STACK",
    "STAGGERED_COLUMN",
    "VEE",
    "WEDGE"
  ]


  @Input()
  move: C2MoveCDT
}


