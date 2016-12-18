import {C2MoveCDT} from "../components/move/C2MoveCDT"
import {C2OrientCDT} from "../components/orient/C2OrientCDT"


export class TacticalAction
{
    public ActionType: string
    /* ClearRoom: C2ClearRoomCDT,
    Dismount: C2DismountCDT
    Fire: C2FireCDT,
    Halt: C2HaltCDT,
    Mount: C2MountCDT, */
    public Move?: C2MoveCDT
    public Orient?: C2OrientCDT
    /* Observe: C2ObserveCDT,
     Patrol: C2PatrolCDT,
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
