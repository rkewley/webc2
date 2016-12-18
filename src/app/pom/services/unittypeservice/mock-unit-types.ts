import {UnitType} from "../../components/taskorg/taskorg"
import {ENTITY_TYPE_MAP} from "../entitytypeservice/mock-entity-types"
import {StringMap} from "../../util/KeyedCollection"
import {Guid} from "../../util/Guid";

export const UNIT_TYPES: UnitType [] = [
  {
    typeId: "Fire Team",
    milstd2525Symbol: "S*G*UCIL---A***",
    subordinateEntities: [{
      entityName: "Fire Team Leader",
      entityId: Guid.newGuid(),
      entityType: ENTITY_TYPE_MAP.Item("Soldier"),
      entityData: undefined,
      parentId: "c1197a6d-1faa-45d1-a87f-570c7dffe39b"
    },
      {
        entityName: "Rifleman",
        entityId: Guid.newGuid(),
        entityType: ENTITY_TYPE_MAP.Item("Soldier"),
        entityData: undefined,
        parentId: "c1197a6d-1faa-45d1-a87f-570c7dffe39b"
      },
      {
        entityName: "Automatic Rifleman",
        entityId: Guid.newGuid(),
        entityType: ENTITY_TYPE_MAP.Item("Automatic Rifleman"),
        entityData: undefined,
        parentId: "c1197a6d-1faa-45d1-a87f-570c7dffe39b"
      },
      {
        entityName: "Grenadier",
        entityId: Guid.newGuid(),
        entityType: ENTITY_TYPE_MAP.Item("Grenadier"),
        entityData: undefined,
        parentId: "c1197a6d-1faa-45d1-a87f-570c7dffe39b"
      }
    ],
    subordinateUnits: undefined,
    unitData: undefined
  }
]







