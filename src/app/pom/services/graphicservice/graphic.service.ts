import { Injectable } from "@angular/core"
import { GRAPHICS } from "./mock-graphics"
import {TacticalGraphic} from "../../opord/TacticalGraphic"

@Injectable()
export class GraphicService {
  getGraphics(): Promise<TacticalGraphic[]> {
    return Promise.resolve(GRAPHICS)
  }
}
