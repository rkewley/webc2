import { Injectable } from "@angular/core"
import {ACQUIRE_ENTITIES} from "./mock-acquire-entities"

@Injectable()
export class AcquireEntityService {
  getAcquireTypes(): Promise<string[]> {
    return Promise.resolve(ACQUIRE_ENTITIES)
  }
}
