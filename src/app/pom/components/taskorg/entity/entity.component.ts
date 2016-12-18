import { Component, Input, OnInit } from "@angular/core"
import { Entity, EntityType } from "../taskorg"
import {EntityTypeService} from "../../../services/entitytypeservice/entity-type.service"
import {StringMap} from "../../../util/KeyedCollection"

@Component({
  selector: "taskorg-entity",
  templateUrl: "./entity.html",
  providers: [EntityTypeService]
})
export class EntityComponent implements OnInit {

  ngOnInit(): void {
    this.getEntityTypes()
    this.typeId = this.entity.entityType.typeId
  }

  entityTypeMap: StringMap<EntityType>
  typeId: string
  entityTypeKeys: string[]

  constructor(private entityTypeService: EntityTypeService) { }

  getEntityTypes(): void {
    this.entityTypeService.getEntityTypeMap().then(et => {
        this.entityTypeMap = et
        this.entityTypeKeys = et.Keys()
      }
    )

  }

  typeSelected(): void {
    this.entity.entityType = this.entityTypeMap.Item(this.typeId)
  }

  @Input()
  entity: Entity
}


