import { Component, Input, OnInit } from "@angular/core"
import { Unit, UnitType, Entity,  } from "../taskorg"
import {UnitTypeService} from "../../../services/unittypeservice/unit-type.service"

@Component({
  selector: "taskorg-unit",
  templateUrl: "./unit.html",
  providers: [UnitTypeService]
})
export class UnitComponent implements OnInit {

  ngOnInit(): void {
    this.getUnitTypes()
  }

  unitTypes: UnitType[]

  constructor(private unitTypeService: UnitTypeService) { }

  getUnitTypes(): void {
    this.unitTypeService.getUnitTypes().then(ut => this.unitTypes = ut)
  }

  @Input()
  u: Unit
}

