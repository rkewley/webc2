import { Injectable } from "@angular/core"
import { MOCK_FRAGO} from "./mock-opord"
import {FRAGO} from "../../opord/Command"


@Injectable()
export class OpordService {

  getOpord(): Promise<FRAGO> {
    return Promise.resolve(MOCK_FRAGO)
  }
}
