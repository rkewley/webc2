import { Injectable } from "@angular/core"
import { MOCK_OPORD} from "./mock-opord"
import {OPORD} from "../../opord/Command"


@Injectable()
export class OpordService {

  getOpord(): Promise<OPORD> {
    return Promise.resolve(MOCK_OPORD)
  }
}
