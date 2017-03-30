import {GeographicPoint} from "../../opord/TacticalGraphic";
import {TacticalGraphic} from "../../opord/TacticalGraphic";
export class TaskOrg {
  constructor (
    public forceSides: ForceSide[],
    public graphics: TacticalGraphic[]
  ){}
}

export class ForceSideAffiliation {
  constructor (
    public affiliateHandle: string,
    public relationship: string
  ){}
}

export class ForceSide {
  constructor (
    public forceName: string,
    public forceId: string,
    public affiliations: ForceSideAffiliation[] = [],
    public subordinateUnits: Unit[] = []
  ){}
}

export class Unit {
  constructor (
  public unitName: string,
  public unitId: string,
  public subordinateUnits: Unit[] = [],
  public subordinateEntities: Entity[] = [],
  public milstd2525Symbol: string,
  public parentId?: string,
  public fullUnitName?: string
){}
}

export class UnitType {
  constructor (
    public typeId: string,
    public milstd2525Symbol: string,
    public subordinateUnits: Unit[],
    public subordinateEntities: Entity[],
    public unitData: any
  ){}
}


export class Entity {
  constructor(
    public entityName: string,
    public entityId: string,
    public entityType: EntityType,
    public parentId?: string,
    public fullEntityName?: string,
    public location?: GeographicPoint,
    public entityData?: any
  ){}
}

export class EntityType {
  constructor(
    public typeId: string,
    public milstd2525Symbol: string,
    public acquireStandardName: string,
    public entityTypeData?: any
){}
}

export class Soldier {
  constructor(
    public heightCm: number,
    public weightKg: number,
    public apftRunMinutes: number,
    public apftRunSeconds: number
  ){}
}

export class UnitAggregator {
  static unitList(unit: Unit): string[] {
    let names: string[] = [unit.fullUnitName]
    for (let u of unit.subordinateUnits) {
      names = names.concat(this.unitList(u))
    }
    return names
  }

  static entityList(unit: Unit): string[] {
    let names: string[] = []
    for (let e of unit.subordinateEntities) {
      names.push(e.fullEntityName)
    }
    for (let u of unit.subordinateUnits) {
      names = names.concat(this.entityList(u))
    }
    return names
  }

  static fsUnitList(forceSide: ForceSide): string[] {
    let names: string[] = []
    for (let u of forceSide.subordinateUnits) {
      names = names.concat(this.unitList(u))
    }
    return names
  }

  static fsEntityList(forceSide: ForceSide): string[] {
    let names: string[] = []
    for (let u of forceSide.subordinateUnits) {
      names = names.concat(this.entityList(u))
    }
    return names
  }
  
  static getUnit(unitId: string, forceSide: ForceSide): Unit {
    let unit: Unit = null
    for (let u of this.fsUnitObjectList(forceSide)) {
      if(u.unitId == unitId) {
        unit = u
        break
      }
    }  
    return unit
  }

  static getEntity(entityId: string, forceSide: ForceSide): Entity {
    let entity: Entity = null
    for (let e of this.fsEntityObjectList(forceSide)) {
      if(e.entityId == entityId) {
        entity = e
        break
      }
    }  
    return entity
  }




  static unitObjectList(unit: Unit): Unit[] {
    let units: Unit[] = [unit]
    for (let u of unit.subordinateUnits) {
      units = units.concat(this.unitObjectList(u))
    }
    return units
  }

  static entityObjectList(unit: Unit): Entity[] {
    let entities: Entity[] = []
    for (let e of unit.subordinateEntities) {
      entities.push(e)
    }
    for (let u of unit.subordinateUnits) {
      entities = entities.concat(this.entityObjectList(u))
    }
    return entities
  }

  static fsUnitObjectList(forceSide: ForceSide): Unit[] {
    let units: Unit[] = []
    for (let u of forceSide.subordinateUnits) {
      units = units.concat(this.unitObjectList(u))
    }
    return units
  }

  static fsEntityObjectList(forceSide: ForceSide): Entity[] {
    let entities: Entity[] = []
    for (let u of forceSide.subordinateUnits) {
      entities = entities.concat(this.entityObjectList(u))
    }
    return entities
  }

  static toEntityObjectList(to: TaskOrg): Entity[] {
    let entities: Entity[] = []
    for (let fs of to.forceSides) {
      entities = entities.concat(this.fsEntityObjectList(fs))
    }
    return entities
  }
  
  static fullUnitName(unitId: string, forceSide: ForceSide): string {
    let fullName: string = ""
    let nextId: string = unitId
    do {
      let unit = this.getUnit(nextId, forceSide)
      if (unit != null) {
        fullName = unit.unitName + "/" + fullName
        nextId = unit.parentId
      } else {
        nextId = null
      }
    } while (nextId)
    return forceSide.forceName + "/" + fullName
  }
  
  static setFullUnitName(unit: Unit, forceSide: ForceSide) {
    unit.fullUnitName = this.fullUnitName(unit.parentId, forceSide) + unit.unitName
  }
  
  static setFullEntityName(entity: Entity, forceSide: ForceSide) {
    entity.fullEntityName = this.fullUnitName(entity.parentId, forceSide) + entity.entityName
  }
  
  static setAllNames(taskOrg: TaskOrg) {
    for (let fs of taskOrg.forceSides) {
      for (let unit of this.fsUnitObjectList(fs)) {
        this.setFullUnitName(unit, fs)
      }
      
      for (let entity of this.fsEntityObjectList(fs)) {
        this.setFullEntityName(entity, fs)
      }
    }
  }
}
