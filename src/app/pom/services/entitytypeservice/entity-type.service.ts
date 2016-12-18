import { Injectable } from "@angular/core"
import {EntityType} from "../../components/taskorg/taskorg"
import {ENTITY_TYPE_MAP} from "./mock-entity-types"
import {StringMap} from "../../util/KeyedCollection"

@Injectable()
export class EntityTypeService {
  getEntityTypes(): Promise<EntityType[]> {
    return Promise.resolve(ENTITY_TYPE_MAP.Values())
  }

  getEntityType(typeId: string): Promise<EntityType> {
    return Promise.resolve(ENTITY_TYPE_MAP.Item(typeId))
  }

  getEntityTypeMap(): Promise<StringMap<EntityType>> {
    return Promise.resolve(ENTITY_TYPE_MAP)
  }
}
