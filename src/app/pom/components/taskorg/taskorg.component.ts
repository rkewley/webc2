import { Component, Input, OnInit } from "@angular/core"
import { Unit, UnitType, Entity, TaskOrg } from "./taskorg"
import {TaskOrgService} from "../../services/taskorgservice/taskorg.service"
import {MilSymbolComponent} from "../milsymbol/milsymbol.component"
import {SymbolInput} from "../milsymbol/milsymbol.component"
import {UnitTreeComponent} from "./unit/unittree.component"
import {EntityComponent} from "./entity/entity.component"
import {UnitComponent} from "./unit/unit.component"
import {OpordService} from "../../services/opordservice/opord.service"
import {FRAGO, C2UnitCommandScript} from "../../opord/Command"
import {UnitCommandScriptComponent} from "../unitcommandscript/unit-command-script.component"
import {TacticalGraphic} from "../../opord/TacticalGraphic";
import {ForceSide} from "./taskorg";
import {Guid} from "../../util/Guid";


@Component({
  selector: "taskorg-list",
  templateUrl: "./taskorg.html",
  providers: [TaskOrgService, OpordService],
  styles: ["#unit-edit {background-color:#f2f2f2;} #task-org-edit {background-color:#e1e8d3;}"]
})
export class TaskOrgComponent implements OnInit {

  taskOrg: TaskOrg = undefined
  selectedEntity: Entity = undefined
  selectedUnit: Unit = undefined
  json: string = ""
  frago: FRAGO = undefined
  buttonText: String = "Show Task Org JSON"

  ngOnInit(): void {
    this.getTaskOrg()
    this.getOpord()
  }

  constructor(private taskOrgService: TaskOrgService, private opordService: OpordService) { }


  getTaskOrg(): void {
    this.taskOrgService.getTaskOrg().then(to =>
      this.taskOrg = to
    )
  }

  getOpord(): void {
    this.opordService.getOpord().then(o => this.frago = o)
  }

  onNotifySelectedEntity(e: Entity): void {
    this.selectedEntity = e
    this.selectedUnit = undefined
  }

  onNotifySelectedUnit(u: Unit): void {
    this.selectedEntity = undefined
    this.selectedUnit = u
  }

  defaultUnit(parentId: string): Unit {
    return new Unit("New Unit", Guid.newGuid(), [], [], "10231000001211000000", parentId)
  }


  deleteUnit(f: ForceSide, index: number): void {
    f.subordinateUnits.splice(index, 1)
  }

  addUnitToForce(f: ForceSide): void {
    f.subordinateUnits.push(this.defaultUnit(f.forceId))
  }

  toJson(): void {
    if (this.json === "") {
      this.json = JSON.stringify(this.taskOrg, null, '\t')
      this.buttonText = "Hide Task Org JSON"
    } else {
      this.json = ""
      this.buttonText = "Show Task Org JSON"

    }
  }

}

