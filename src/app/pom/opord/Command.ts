import {C2MoveCDT} from "../components/move/C2MoveCDT"
import {C2OrientCDT} from "../components/orient/C2OrientCDT"
import {C2MountCDT} from "../components/mount/C2MountCDT"
import {C2DismountCDT} from "../components/dismount/C2DismountCDT"
import {C2ObserveCDT} from "../components/observe/C2ObserveCDT"
import {C2SetLoadCDT} from "../components/setload/C2SetLoadCDT"
import {TacticalGraphic} from "./TacticalGraphic"

export class OPORD
{
	public MissionName: string
	public UnitName: string
	public Phases: Phase[]
}

export class TacticalAction
{
    public ActionType: string
    /* ClearRoom: C2ClearRoomCDT,
    Fire: C2FireCDT,
    Halt: C2HaltCDT, */
    public Mount?: C2MountCDT
    public Dismount?: C2DismountCDT
    public Move?: C2MoveCDT
    public Orient?: C2OrientCDT
    public Observe?: C2ObserveCDT
    public SetLoad?: C2SetLoadCDT
    /* Patrol: C2PatrolCDT,
     SearchArea: C2SearchAreaCDT,
     SearchEntity: C2SearchEntityCDT,
     SearchRoom: C2SearchRoomCDT,
     SearchRoute: C2SearchRouteCDT,
     SendSignal: C2SendSignalCDT,
     SetICWeaponState: C2SetWeaponStateCDT,
     SetPosture: C2SetPostureCDT,
     SetWeaponState: C2SetWeaponStateCDT,
     SetWeaponsControlStatus: C2SetWeaponsControlStatusCDT */


}

export class C2CommandScript {
  public TacticalActions: TacticalAction[] = []
  public Receiver: string
  public ScriptName: string
  public Sender: string
}

export class C2UnitCommandScript {
    public Receiver: string
    public ScriptName: string
    public Sender: string
    public TacticalActions: TacticalAction[] = []
    public UnitName: string = ""
}

export class Command {
    public CommandType: string
    public SingleEntityCommand?: C2CommandScript
    public SingleEntitySignal?: C2CommandSignal
    public UnitCommand?: C2UnitCommandScript
    public UnitSignal?: C2UnitCommandSignal
}

export class FRAGO {
  constructor (
    public commands: Command[]
  ){}
}

export class C2CommandSignal {
  constructor (
  public Receiver: string,
  public Sender: string,
  public Signal: string,
  public SignalName: string
){}
}

export class C2UnitCommandSignal {
  constructor (
  public Receiver: string,
  public Sender: string,
  public Signal: string,
  public SignalName: string,
  public UnitName?: string
){}
}

export class PhaseTrigger
{
	public DelayInSeconds?: number
	public InformationRequirement?: AndInformationRequirement
	public Signal?: string
	public TriggerType: string
}

export class Phase 
{
    public Branches: Branch[]
	public DefaultOrders: FRAGO
	public PhaseName: string
	public PhaseNumber: number
	public PhaseTrigger: PhaseTrigger
}

export class InformationRequirement
{
	public DecidingEntity: string
	public IRType: string
	public ProximityRequirement: TacticalGraphicProximity 
}

export class TacticalGraphicProximity
{
    public Containment: boolean
	public Proximity?: ProximityType
	public TacticalGraphic: TacticalGraphic 
}

export class ProximityType
{
	public ProximityDistance: number
	public TacticalGraphicReferencePoint: string
}
export class AndInformationRequirement
{
	public InformationRequirements: InformationRequirement[]
	public OrInformationRequirements: OrInformationRequirement[]
}

export class Branch
{
	public InformationRequirement: AndInformationRequirement
	public Orders: FRAGO
}


export class OrInformationRequirement
{
	public AndInformationRequirements: AndInformationRequirement[]
	public InformationRequirements: InformationRequirement[]
}

