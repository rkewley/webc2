import { Component, Input, OnInit } from "@angular/core"
import { ActionTriggerComponent } from "../actiontrigger/actiontrigger.component"
import { C2ObserveCDT } from "./C2ObserveCDT"
import {GraphicService} from "../../services/graphicservice/graphic.service"
import {TacticalGraphic} from "../../opord/TacticalGraphic"


/* tslint:disable:no-unused-labels */


@Component({
  selector: "c2-observe",
  templateUrl: "./observe.html",
  providers: [GraphicService]
})
export class ObserveComponent implements OnInit {

  ngOnInit(): void {
    this.getGraphics()
  }

  graphics: TacticalGraphic[]

  constructor(private graphicService: GraphicService) { }

  getGraphics(): void {
    this.graphicService.getGraphics().then(gr => this.graphics = gr)
  }

  @Input()
  observe: C2ObserveCDT
}


