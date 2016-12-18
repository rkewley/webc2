import { Component, Input, OnInit } from "@angular/core"
import { EntityType } from "../taskorg"
import {AcquireEntityService} from "../../../services/acquireentityservice/acquire-entity.service"
import {StringMap} from "../../../util/KeyedCollection"


@Component({
  selector: "taskorg-entitytype",
  templateUrl: "./entitytype.html",
  providers: [AcquireEntityService]
})
export class EntityTypeComponent implements OnInit {

  ngOnInit(): void {
    this.getAcquireTypes()
  }

  acquireTypes: string[]

  constructor(private acquireTypeService: AcquireEntityService) { }

  getAcquireTypes(): void {
    this.acquireTypeService.getAcquireTypes().then(t => this.acquireTypes = t)
  }

  @Input()
  entityType: EntityType
}


