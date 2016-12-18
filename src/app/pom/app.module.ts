import { NgModule }      from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { FormsModule }   from "@angular/forms"
import { ActionTriggerComponent }   from "./components/actiontrigger/actiontrigger.component"
import {EntityComponent} from "./components/taskorg/entity/entity.component"
import {EntityTypeComponent} from "./components/taskorg/entitytype/entitytype.component"
import {UnitComponent} from "./components/taskorg/unit/unit.component"
import {EntityTypeService} from "./services/entitytypeservice/entity-type.service"
import {UnitTypeService} from "./services/unittypeservice/unit-type.service"
import {AcquireEntityService} from "./services/acquireentityservice/acquire-entity.service"
import {GraphicService} from "./services/graphicservice/graphic.service"
import {TaskOrgComponent} from "./components/taskorg/taskorg.component"
import {MilSymbolComponent} from "./components/milsymbol/milsymbol.component"
import {UnitTreeComponent} from "./components/taskorg/unit/unittree.component"
import {UnitCommandComponent} from "./components/unitcommand/unit-command.component"
import {OrientComponent} from "./components/orient/orient.component"
import {MoveComponent} from "./components/move/move.component"
import {UnitCommandScriptComponent} from "./components/unitcommandscript/unit-command-script.component"
import {EntityCommandScriptComponent} from "./components/entitycommandscript/entity-command-script.component"
import {CommandComponent} from "./components/command/command.component"
import {FragoComponent} from "./components/frago/frago.component"
import {TacticalMapComponent} from "./components/tacticalmap/tacticalmap.component";


@NgModule({
  imports:      [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    ActionTriggerComponent,
    EntityComponent,
    EntityTypeComponent,
    UnitComponent,
    TaskOrgComponent,
    MilSymbolComponent,
    UnitTreeComponent,
    UnitCommandComponent,
    UnitCommandComponent,
    OrientComponent,
    MoveComponent,
    UnitCommandScriptComponent,
    EntityCommandScriptComponent,
    CommandComponent,
    FragoComponent,
    TacticalMapComponent
  ],
  providers: [
    EntityTypeService,
    UnitTypeService,
    AcquireEntityService,
    GraphicService
  ],

  bootstrap:    [ TaskOrgComponent ]
})
export class PomModule { }
