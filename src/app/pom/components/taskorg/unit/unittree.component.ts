import { Component, Input, Output, EventEmitter, ApplicationRef } from "@angular/core"
import { Unit, UnitType, Entity } from "../taskorg"
import {MilSymbolComponent, SymbolInput} from "../../milsymbol/milsymbol.component"
import {ENTITY_TYPE_MAP} from "../../../services/entitytypeservice/mock-entity-types"
import {StringMap} from "../../../util/KeyedCollection"
import {Guid} from "../../../util/Guid";

@Component({
  selector: "unit-tree",
  templateUrl: "./unit-tree.html",
  styles: [`
    ul {list-style-type: none;}
  `]
})
export class UnitTreeComponent {

  expanded: boolean = false
  buttonText: string = "+"

  defaultEntity(parentId: string): Entity {
    return new Entity("Rifleman", Guid.newGuid(), ENTITY_TYPE_MAP.Item("Soldier"), parentId)
  }

  defaultUnit(parentId: string): Unit {
    return new Unit("New Unit", Guid.newGuid(), [], [], "10231000001211000000", parentId)
  }

  toggle(): void {
    this.expanded = !this.expanded
    if (this.expanded)
      this.buttonText = "-"
    else
      this.buttonText = "+"
  }

  symbolData(sidc: string, size: number, unitName: string, icon: boolean): SymbolInput {
    return new SymbolInput(sidc, size, unitName, icon)
  }

  addEntity(parentId: string): void {
    this.unit.subordinateEntities.push(this.defaultEntity(parentId))
  }

  addUnit(parentId: string): void {
    this.unit.subordinateUnits.push(this.defaultUnit(parentId))
  }

  deleteEntity(index: number): void {
    this.unit.subordinateEntities.splice(index, 1)
  }

  deleteUnit(index: number): void {
    this.unit.subordinateUnits.splice(index, 1)
  }

  clickEntity(e: Entity): void {
    this.notifySelectedEntity.emit(e)
  }

  onNotifySelectedEntity(e: Entity): void {
    this.clickEntity(e)
  }

  clickUnit(u:Unit): void {
    this.notifySelectedUnit.emit(u)
  }

  onNotifySelectedUnit(u: Unit): void {
    this.clickUnit(u)
  }

  @Input()
  unit: Unit

  @Output()
  notifySelectedEntity: EventEmitter<Entity> = new EventEmitter<Entity>()

  @Output()
  notifySelectedUnit: EventEmitter<Unit> = new EventEmitter<Unit>()

}

