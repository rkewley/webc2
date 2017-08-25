

import {ActionTriggerCDT} from "../../components/actiontrigger/ActionTriggerCDT"
import {OPORD, FRAGO} from "../../opord/Command"
import {Command} from "../../opord/Command"
import {C2MoveCDT} from "../../components/move/C2MoveCDT"
import {TacticalAction} from "../../opord/Command"
import {TacticalGraphic} from "../../opord/TacticalGraphic"

let g: TacticalGraphic =
{
  Affiliation: "FRIEND",
    graphicType: "Point",
  point: {
  latitude: 1.0,
    longitude: 1.0,
    altitude: 1.0
  },
  line: undefined,
    area: undefined,
  circle: undefined,
  ObjectHandle: "abc",
  Owner: "Fire Team 1",
  SymbolIdentifier: "G*C*OGC---*****",
  graphicName: "Checkpoint 1"
}

let moveAction: C2MoveCDT = {
  ActionTrigger: {
    DelayInSeconds: 1,
    OrderOfExecution: 1,
    StartSignal: "start",
    StopSignal: "stop",
    TriggerType: "ASAP"
  },
  AltMetersAGL: 0,
  Formation: "COLUMN",
  MoveSpeed: 4,
  RouteGraphic: g
}
let actions: TacticalAction = new TacticalAction()
actions.Move = moveAction
actions.ActionType = "Move"


const sseaMission: string = `
{ "MissionName": "SSEA2", "UnitName": "Friendly Forces/1st Squad", "Phases": [ { "Branches": [], "DefaultOrders": { "commands": [ { "CommandType": "SingleEntity", "SingleEntityCommand": { "TacticalActions": [ { "ActionType": "Mount", "Mount": { "ActionTrigger": { "OrderOfExecution": "1", "TriggerType": "ASAP" }, "VehicleToMount": "Friendly Forces/1st Squad/Fire Team 1/Rifleman" } } ], "Receiver": "Friendly Forces/1st Squad/Fire Team 1/SBS", "ScriptName": "Mount SBS", "Sender": "Friendly Forces/1st Squad/Fire Team 1/Rifleman" } } ] }, "PhaseName": "Mount SBS", "PhaseNumber": "1", "PhaseTrigger": { "TriggerType": "Immediate" } }, { "Branches": [], "DefaultOrders": { "commands": [ { "CommandType": "Unit", "UnitCommand": { "TacticalActions": [ { "ActionType": "Set Load", "SetLoad": { "ActionTrigger": { "TriggerType": "ASAP", "OrderOfExecution": "1" }, "Load": "ApproachLoad", "BodyArmor": true } } ], "UnitName": "Friendly Forces/1st Squad", "ScriptName": "Don Approach Load", "Receiver": "Set Unit", "Sender": "Friendly Forces/1st Squad" } } ] }, "PhaseName": "Don Approach Load", "PhaseNumber": "2", "PhaseTrigger": { "TriggerType": "Immediate" } }, { "Branches": [], "DefaultOrders": { "commands": [ { "CommandType": "Unit", "UnitCommand": { "TacticalActions": [ { "ActionType": "Move", "Move": { "ActionTrigger": { "TriggerType": "ASAP", "OrderOfExecution": "1" }, "AltMetersAGL": "0", "Formation": "COLUMN", "MoveSpeed": "4", "RouteGraphic": { "Affiliation": "FRIEND", "graphicType": "Line", "line": { "waypoints": [ { "latitude": 41.37088292754658, "longitude": -73.99623250872799, "altitude": 0 }, { "latitude": 41.36552043768075, "longitude": -74.00152719064323, "altitude": 0 }, { "latitude": 41.36206599021389, "longitude": -74.00623446812432, "altitude": 0 }, { "latitude": 41.357504075676765, "longitude": -74.00841644548791, "altitude": 0 }, { "latitude": 41.35290358917541, "longitude": -73.9997227356834, "altitude": 0 }, { "latitude": 41.34905685056122, "longitude": -74.0018990131054, "altitude": 0 }, { "latitude": 41.34481369847199, "longitude": -74.00659204073236, "altitude": 0 }, { "latitude": 41.34681600271864, "longitude": -74.0170066392626, "altitude": 0 }, { "latitude": 41.3448530902358, "longitude": -74.02255726128169, "altitude": 0 }, { "latitude": 41.34876872499585, "longitude": -74.02310097439084, "altitude": 0 }, { "latitude": 41.349824409072596, "longitude": -74.02886599500789, "altitude": 0 }, { "latitude": 41.353831464036546, "longitude": -74.03277847357816, "altitude": 0 }, { "latitude": 41.35544834017919, "longitude": -74.03679464938676, "altitude": 0 }, { "latitude": 41.35599905921697, "longitude": -74.04154931932226, "altitude": 0 }, { "latitude": 41.35124900684966, "longitude": -74.04478496117474, "altitude": 0 }, { "latitude": 41.34861611748559, "longitude": -74.05103763927877, "altitude": 0 }, { "latitude": 41.34601092550851, "longitude": -74.057082221739, "altitude": 0 }, { "latitude": 41.34380616205059, "longitude": -74.06491103152376, "altitude": 0 }, { "latitude": 41.34218823605759, "longitude": -74.07140035707044, "altitude": 0 }, { "latitude": 41.34131481736574, "longitude": -74.07885072357914, "altitude": 0 }, { "latitude": 41.33991148017582, "longitude": -74.08111678512938, "altitude": 0 }, { "latitude": 41.34114305362528, "longitude": -74.08722799583614, "altitude": 0 }, { "latitude": 41.346333926067146, "longitude": -74.08556291332332, "altitude": 0 }, { "latitude": 41.35034672027899, "longitude": -74.08378623449369, "altitude": 0 }, { "latitude": 41.35834471370628, "longitude": -74.07955049822829, "altitude": 0 }, { "latitude": 41.36330963233829, "longitude": -74.0771751380301, "altitude": 0 }, { "latitude": 41.366436110690636, "longitude": -74.07324087589978, "altitude": 0 }, { "latitude": 41.367952101545356, "longitude": -74.07231068786615, "altitude": 0 } ] }, "ObjectHandle": "55fc0a17-d4af-4504-b232-c393a02979d4", "Owner": "Fire Team 1", "SymbolIdentifier": "G*C*OGC---*****", "graphicName": "Road March" } } }, { "ActionType": "Orient", "Orient": { "ActionTrigger": { "OrderOfExecution": "2", "TriggerType": "CompletionOfPrevious" }, "OrientationInDegrees": "45" } }, { "ActionType": "Set Load", "SetLoad": { "ActionTrigger": { "OrderOfExecution": "3", "TriggerType": "CompletionOfPrevious" }, "Load": "FightingLoad", "BodyArmor": true } } ], "UnitName": "Friendly Forces/1st Squad", "ScriptName": "Road March", "Sender": "Friendly Forces/1st Squad", "Receiver": "Friendly Forces/1st Squad" } } ] }, "PhaseName": "Road March", "PhaseNumber": "3", "PhaseTrigger": { "TriggerType": "Immediate" } }, { "Branches": [], "DefaultOrders": { "commands": [ { "CommandType": "SingleEntity", "SingleEntityCommand": { "TacticalActions": [ { "ActionType": "Dismount", "Dismount": { "ActionTrigger": { "TriggerType": "ASAP", "OrderOfExecution": "1" } } }, { "ActionType": "Move", "Move": { "4": "Normal", "ActionTrigger": { "TriggerType": "CompletionOfPrevious", "OrderOfExecution": "2" }, "AltMetersAGL": "100", "Formation": "WEDGE", "RouteGraphic": { "graphicName": "UAVOut", "ObjectHandle": "52a4f334-fdc7-4fa6-8a74-32357a7aecf5", "graphicType": "Line", "line": { "waypoints": [ { "latitude": 41.368247670040596, "longitude": -74.07194178308106, "altitude": 0 }, { "latitude": 41.37109027936932, "longitude": -74.06802252114869, "altitude": 0 }, { "latitude": 41.37161402196696, "longitude": -74.06453241265865, "altitude": 0 }, { "latitude": 41.37055969267912, "longitude": -74.0615358306274, "altitude": 0 }, { "latitude": 41.36841032033279, "longitude": -74.06283078301999, "altitude": 0 } ] } }, "MoveSpeed": "30" } }, { "ActionType": "Observe", "Observe": { "ActionTrigger": { "TriggerType": "CompletionOfPrevious", "OrderOfExecution": "3" }, "AreaOfInterestGraphic": { "graphicName": "AOI Hilltop", "ObjectHandle": "30fa826d-1a53-4198-8b88-39a929122722", "graphicType": "Circle", "circle": { "center": { "latitude": 41.368473118038914, "longitude": -74.06314415035763, "altitude": 0 }, "radiusMeters": 204.08694141742723 } } } }, { "ActionType": "Move", "Move": { "ActionTrigger": { "OrderOfExecution": "4", "TriggerType": "CompletionOfPrevious" }, "AltMetersAGL": "100", "Formation": "WEDGE", "MoveSpeed": "30", "RouteGraphic": { "graphicName": "UAV Return", "ObjectHandle": "d1e74d01-8209-4481-b4da-a691a8dd4e0a", "graphicType": "Line", "line": { "waypoints": [ { "latitude": 41.36625080553641, "longitude": -74.06438868249512, "altitude": 0 }, { "latitude": 41.36456067208673, "longitude": -74.0679441825256, "altitude": 0 }, { "latitude": 41.366360517120135, "longitude": -74.07007760251611, "altitude": 0 }, { "latitude": 41.367773826728055, "longitude": -74.0703227473602, "altitude": 0 }, { "latitude": 41.36802383617786, "longitude": -74.07201466668698, "altitude": 0 } ] } } } } ], "Receiver": "Friendly Forces/1st Squad/Fire Team 1/SBS", "ScriptName": "Recon", "Sender": "Friendly Forces/1st Squad/Fire Team 1/Rifleman" } } ] }, "PhaseName": "Recon", "PhaseNumber": "4", "PhaseTrigger": { "TriggerType": "Immediate" } }, { "Branches": [], "DefaultOrders": { "commands": [ { "CommandType": "Unit", "UnitCommand": { "TacticalActions": [ { "ActionType": "Move", "Move": { "ActionTrigger": { "OrderOfExecution": "1", "TriggerType": "ASAP" }, "RouteGraphic": { "graphicName": "UAVOut", "ObjectHandle": "52a4f334-fdc7-4fa6-8a74-32357a7aecf5", "graphicType": "Line", "line": { "waypoints": [ { "latitude": 41.368247670040596, "longitude": -74.07194178308106, "altitude": 0 }, { "latitude": 41.37109027936932, "longitude": -74.06802252114869, "altitude": 0 }, { "latitude": 41.37161402196696, "longitude": -74.06453241265865, "altitude": 0 }, { "latitude": 41.37055969267912, "longitude": -74.0615358306274, "altitude": 0 }, { "latitude": 41.36841032033279, "longitude": -74.06283078301999, "altitude": 0 } ] } }, "AltMetersAGL": "0", "Formation": "WEDGE", "MoveSpeed": "6" } } ], "UnitName": "Friendly Forces/1st Squad", "ScriptName": "Assault", "Sender": "Friendly Forces/1st Squad", "Receiver": "Friendly Forces/1st Squad" } } ] }, "PhaseName": "Assault", "PhaseNumber": "5", "PhaseTrigger": { "TriggerType": "Immediate" } } ] }`
export const MOCK_OPORD: OPORD = JSON.parse(sseaMission)