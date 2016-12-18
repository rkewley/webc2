export class TacticalGraphic {
    public Affiliation?: string
    public graphicType: string
    public point?: GeographicPoint
    public line?: GeographicLine
    public area?: GeographicPolygon
    public circle?: GeographicCircle
    public ObjectHandle: string
    public Owner?: string
    public SymbolIdentifier?: string
    public graphicName: string
}

export class GeographicPoint {
  constructor (
  public latitude: number,
  public longitude: number,
  public altitude?: number){}
}

export class  GeographicLine {
  constructor (
  public waypoints: GeographicPoint[]
  ){}
}

export class GeographicPolygon {
  constructor(
  public vertices: GeographicPoint[]
  ){}
}

export class GeographicCircle {
  constructor (
  public center: GeographicPoint,
  public radiusMeters: number
){}
}
