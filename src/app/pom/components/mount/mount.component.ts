import { Component, Input } from "@angular/core"
import { C2MountCDT } from "./C2MountCDT"
import {UnitAggregator, TaskOrg, ForceSide} from "../taskorg/taskorg"
import { ActionTriggerComponent } from "../actiontrigger/actiontrigger.component"


@Component({
  selector: "c2-mount",
  templateUrl: "./mount.html"
})
export class MountComponent {
  
  getEntityNames():string[] {
    return UnitAggregator.fsEntityList(this.forceSide)
  }
  
  @Input()
  forceSide: ForceSide

  @Input()
  mount: C2MountCDT
}


