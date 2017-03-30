import { Component, Input, OnInit, ViewChild, OnChanges, ElementRef, SimpleChanges } from '@angular/core';
import {TacticalGraphic, GeographicPoint, GeographicLine, GeographicPolygon, GeographicCircle} from "../../opord/TacticalGraphic";
import {Guid} from "../../util/Guid"
import {TaskOrg} from "../taskorg/taskorg";
import {Entity} from "../taskorg/taskorg";
import {UnitAggregator} from "../taskorg/taskorg";
import {SymbolInput} from "../milsymbol/milsymbol.component";

declare var google: any
declare var MS: any

class DragHandler {
  constructor(
    public entity: Entity
  ){}
  onDragEnd = (e: any) => {
    let point = new GeographicPoint(e.latLng.lat(), e.latLng.lng(), 0)
    this.entity.location = point
  }
}


@Component({
  selector: 'tactical-map',
  templateUrl: "./tacticalmap.component.html"
})
export class TacticalMapComponent implements OnInit, OnChanges {
  lat: number = 41.368858;
  public lng: number = -74.071311;

  map: any
  selectedGraphic: TacticalGraphic
  graphicTypes: string[] = [
    "Point",
    "Line",
    "Area",
    "Circle"
  ]
  graphicsInitialized: boolean = false
  positionsInitialized: boolean = false
  graphicsMap: { [ObjectHandle: string]: Array<any>; } = { };
  startIconsMap: { [ObjectHandle: string]: any} = { };
  entityList: Entity[] = []

  ngOnChanges(changes: SimpleChanges): void {
    if (this.taskOrg && this.taskOrg.graphics.length > 0 && !this.graphicsInitialized) {
      let mapProp = {
        center: new google.maps.LatLng(this.lat, this.lng),
        zoom: 13
      };
      let element: HTMLElement = document.getElementById("googleMap")
      this.map = new google.maps.Map(element, mapProp)

      this.drawGraphics()
      this.graphicsInitialized = true
    }
    if (this.taskOrg) {
      this.entityList = UnitAggregator.toEntityObjectList(this.taskOrg)
      if (!this.positionsInitialized) {
        this.drawEntities()
        this.positionsInitialized = true
      }
    }
  }
  
  ngDoCheck(): void {
    //console.log("Checking")
  }

  ngOnInit() {
  }

  drawGraphics(): void {
    for (let g of this.taskOrg.graphics) {
      if(g.line) {
         this.graphicsMap[g.ObjectHandle] = this.buildLine(g)
      }
      else if (g.point) {
        this.graphicsMap[g.ObjectHandle] = this.buildMarker(g)
      }
      else if (g.area) {
        this.graphicsMap[g.ObjectHandle] = this.buildPolygon(g)
      }
      else if (g.circle) {
        this.graphicsMap[g.ObjectHandle] = this.buildCircle(g)
      }
    }
  }

  drawEntities(): void {
    for (let e of this.entityList) {
      if (!e.location) {
        let point = new GeographicPoint(this.lat, this.lng, 0)
        e.location = point
      }
      this.startIconsMap[e.entityId] = this.buildEntity(e)
    }
  }
  
  updateEntities(): void {
    this.entityList = UnitAggregator.toEntityObjectList(this.taskOrg)
    this.drawEntities()
  }

  buildEntity(e: Entity): any {

    let mil: any = new MS.symbol(e.entityType.milstd2525Symbol, {
      size: 15,
      icon: true,
      uniqueDesignation: e.entityName,
      infoSize: 70
    }).getMarker().asSVG()

    let entityMarker = new google.maps.Marker({
      position: new google.maps.LatLng(e.location.latitude, e.location.longitude),
      map: this.map,
      draggable: true,
      icon: { url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(mil) },
      title: e.entityName
    })
    let dh = new DragHandler(e)
    entityMarker.addListener('dragend', dh.onDragEnd)
    return entityMarker
  }


  buildLine(g: TacticalGraphic): Array<any> {
    let linePath = this.getMapPoints(g.line.waypoints)
    let lineOptions = {
      map: this.map,
      path: linePath
    }
    let line = new google.maps.Polyline(lineOptions)
    let lineArray: Array<any> = []
    lineArray.push(line)
    let startMarker = new google.maps.Marker({
      position: new google.maps.LatLng(g.line.waypoints[0].latitude, g.line.waypoints[0].longitude),
      map: this.map,
      title: g.graphicName,
      icon: "assets/images/checkpoint.png"
    })
    lineArray.push(startMarker)
    return lineArray
  }

  buildPolygon(g: TacticalGraphic): Array<any> {
    let linePath = this.getMapPoints(g.area.vertices)
    let lineOptions = {
      map: this.map,
      paths: linePath
    }
    let line = new google.maps.Polygon(lineOptions)
    let lineArray: Array<any> = []
    lineArray.push(line)
    let areaIcon = {scaledSize: {height: 30, width: 30}, url:"assets/images/10032500001501010000.png"}
    let startMarker = new google.maps.Marker({
      position: new google.maps.LatLng(g.area.vertices[0].latitude, g.area.vertices[0].longitude),
      map: this.map,
      title: g.graphicName,
      icon: areaIcon
    })
    lineArray.push(startMarker)
    return lineArray
  }

  buildMarker(g: TacticalGraphic): Array<any> {
    let pointArray: Array<any> = []
    let marker = new google.maps.Marker({
      position: new google.maps.LatLng(g.point.latitude, g.point.longitude),
      map: this.map,
      title: g.graphicName,
      icon: "assets/images/checkpoint.png"
    })
    pointArray.push(marker)
    return pointArray
  }

  buildCircle(g: TacticalGraphic): Array<any> {
    let pointArray: Array<any> = []
    let circle = new google.maps.Circle({
      center: new google.maps.LatLng(g.circle.center.latitude, g.circle.center.longitude),
      radius: g.circle.radiusMeters,
      map: this.map,
      title: g.graphicName,
      icon: "assets/images/checkpoint.png"
    })
    pointArray.push(circle)

    let areaIcon  = {scaledSize: {height: 30, width: 30}, url:"assets/images/10032500001501010000.png"}
    let centerMarker = new google.maps.Marker({
      position: new google.maps.LatLng(g.circle.center.latitude, g.circle.center.longitude),
      map: this.map,
      title: g.graphicName,
      icon: areaIcon
    })
    pointArray.push(centerMarker)
    return pointArray
  }

  getMapPoints(gPoints: Array<GeographicPoint>): Array<any> {
    let path: Array<any> = []
    for (let p of gPoints) {
      let pp = new google.maps.LatLng(p.latitude, p.longitude)
      path.push(pp)
    }
    return path
  }

  getGeographicPoints(mPoints: Array<any>): Array<GeographicPoint> {
    let gPoints: Array<GeographicPoint> = []
    for (let p of mPoints) {
      let g = new GeographicPoint(p.lat(), p.lng(), 0)
      gPoints.push(g)
    }
    return gPoints
  }

  doneEditing() {
    let a = this.graphicsMap[this.selectedGraphic.ObjectHandle]
    a[0].setDraggable(false)
    switch(this.selectedGraphic.graphicType) {
      case "Point":
        let p: any = a[0].getPosition()
        a[0].setTitle(this.selectedGraphic.graphicName)
        this.selectedGraphic.point = new GeographicPoint(p.lat(), p.lng(), 0)
        break
      case "Line":
        let path = a[0].getPath()
        let waypoints = this.getGeographicPoints(path.getArray())
        this.selectedGraphic.line = new GeographicLine(waypoints)
        let firstWaypoint = waypoints[0]
        a[1].setPosition({lat: firstWaypoint.latitude, lng: firstWaypoint.longitude})
        a[1].setTitle(this.selectedGraphic.graphicName)
        a[0].setEditable(false)
        break
      case "Area":
        let outline = a[0].getPath()
        let vertices = this.getGeographicPoints(outline.getArray())
        this.selectedGraphic.area = new GeographicPolygon(vertices)
        let firstVertex = vertices[0]
        a[1].setPosition({lat: firstVertex.latitude, lng: firstVertex.longitude})
        a[1].setTitle(this.selectedGraphic.graphicName)
        a[0].setEditable(false)
        break
      case "Circle":
        let center: any = a[0].getCenter()
        let r: number = a[0].getRadius()
        this.selectedGraphic.circle = new GeographicCircle(new GeographicPoint(center.lat(), center.lng(), 0), r)
        a[1].setPosition(center)
        a[1].setTitle(this.selectedGraphic.graphicName)
        a[0].setEditable(false)
        break
      default:
    }
    this.selectedGraphic = undefined
  }

  newPoint(): GeographicPoint {
    return new GeographicPoint(this.lat+0.001, this.lng + 0.001, 0.0)
  }

  newLine(): GeographicLine {
    let waypoints: Array<GeographicPoint> = []
    waypoints.push(this.newPoint())
    waypoints.push(new GeographicPoint(this.lat+0.002, this.lng + 0.002, 0))
    return new GeographicLine(waypoints)
  }

  newArea(): GeographicPolygon {
    let vertices: Array<GeographicPoint> = []
    vertices.push(this.newPoint())
    vertices.push(new GeographicPoint(this.lat+0.002, this.lng + 0.002, 0))
    vertices.push(new GeographicPoint(this.lat+0.001, this.lng + 0.002, 0))
    return new GeographicPolygon(vertices)
  }

  newCircle(): GeographicCircle {
    return new GeographicCircle(this.newPoint(), 1000)
  }

  newGraphic(): TacticalGraphic {
    let t = new TacticalGraphic()
    t.graphicName = "Point"
    t.ObjectHandle = Guid.newGuid()
    t.point = this.newPoint()

    return t
  }

  addNewGraphic() {
    let n: TacticalGraphic = this.newGraphic()
    this.taskOrg.graphics.push(n)
    this.selectedGraphic = n
    this.graphicsMap[this.selectedGraphic.ObjectHandle] = this.buildMarker(this.selectedGraphic)
  }

  clearData(): void {
    this.selectedGraphic.point = undefined
    this.selectedGraphic.line = undefined
    this.selectedGraphic.area = undefined
    this.selectedGraphic.circle = undefined
    for (let g of this.graphicsMap[this.selectedGraphic.ObjectHandle]) {
      g.setMap(null)
    }
  }

  graphicTypeSelected() {
    this.clearData()

    switch(this.selectedGraphic.graphicType) {
      case "Point":
        this.selectedGraphic.point = this.newPoint()
        this.graphicsMap[this.selectedGraphic.ObjectHandle] = this.buildMarker(this.selectedGraphic)
        break
      case "Line":
        this.selectedGraphic.line = this.newLine()
        this.graphicsMap[this.selectedGraphic.ObjectHandle] = this.buildLine(this.selectedGraphic)
        break
      case "Area":
        this.selectedGraphic.area = this.newArea()
        this.graphicsMap[this.selectedGraphic.ObjectHandle] = this.buildPolygon(this.selectedGraphic)
        break
      case "Circle":
        this.selectedGraphic.circle = this.newCircle()
        this.graphicsMap[this.selectedGraphic.ObjectHandle] = this.buildCircle(this.selectedGraphic)
        break
      default:
    }
    this.editSelectedGraphic()
  }

  editSelectedGraphic(): void {
    let a = this.graphicsMap[this.selectedGraphic.ObjectHandle]
    a[0].setDraggable(true)
    switch(this.selectedGraphic.graphicType) {
      case "Point":
        break
      case "Line":
        a[0].setEditable(true)
        break
      case "Area":
        a[0].setEditable(true)
        break
      case "Circle":
        a[0].setEditable(true)
        break
      default:
    }
  }



  clickGraphic(g: TacticalGraphic): void {
    if(this.selectedGraphic) {
      return
    }
    this.selectedGraphic = g
    this.editSelectedGraphic()
  }


  deleteGraphic(graphic: TacticalGraphic, i: number): void {
    let graphicsArray = this.graphicsMap[graphic.ObjectHandle]
    for (let g of graphicsArray) {
      g.setMap(null)
    }
    delete this.graphicsMap[graphic.ObjectHandle]
    this.taskOrg.graphics.splice(i, 1)
  }

  addToMap(entity: Entity): void {

  }


  symbolData(sidc: string, size: number, unitName: string, icon: boolean): SymbolInput {
    return new SymbolInput(sidc, size, unitName, icon)
  }

  @Input()
  n: number

  @Input()
  taskOrg: TaskOrg
}
