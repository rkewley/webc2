import { Injectable } from "@angular/core"
import {UnitType} from "../../components/taskorg/taskorg"
import {UNIT_TYPES} from "./mock-unit-types"
import {StringMap} from "../../util/KeyedCollection"


@Injectable()
export class UnitTypeService {
  getUnitTypes(): Promise<UnitType[]> {
    return Promise.resolve(UNIT_TYPES)
  }
}
