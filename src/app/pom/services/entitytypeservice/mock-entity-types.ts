

import {EntityType} from "../../components/taskorg/taskorg"
import {StringMap} from "../../util/KeyedCollection"

let entityTypes = new StringMap<EntityType>()
let soldier: EntityType = {
  typeId: "Soldier",
  milstd2525Symbol: "10231500001101030000",
  acquireStandardName: "ICFullyLoaded_entity",
  entityTypeData: undefined
}
entityTypes.Add("Soldier", soldier)

let grenadier: EntityType = {
  typeId: "Grenadier",
  milstd2525Symbol: "10231500001102010000",
  acquireStandardName: "ICFullyLoaded_entity",
  entityTypeData: undefined
}
entityTypes.Add("Grenadier", grenadier)

let ar: EntityType = {
  typeId: "Automatic Rifleman",
  milstd2525Symbol: "10231500001101030000",
  acquireStandardName: "ICFullyLoaded_entity",
  entityTypeData: undefined
}
entityTypes.Add("Automatic Rifleman", ar)

let sbs:EntityType = {
  typeId: "SoldierBorneSensor",
  milstd2525Symbol: "S*G*UCIL----***",
  acquireStandardName: "SoldierBorneSensor",
  entityTypeData: undefined
}
entityTypes.Add("SoldierBorneSensor", sbs)
export const ENTITY_TYPE_MAP: StringMap<EntityType> = entityTypes
