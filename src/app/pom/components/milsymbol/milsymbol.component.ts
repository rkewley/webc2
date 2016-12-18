import { Component, Input, OnInit, AfterViewInit, ViewChild, ElementRef } from "@angular/core"



export class SymbolInput {
  constructor(
    public sidc: string,
    public symbolSize: number,
    public uniqueDesignation: string,
    public icon: boolean
  ){}
}

declare var MS: any

@Component({
  selector: "mil-symbol",
  template: "<span #symbol></span>"
})
export class MilSymbolComponent implements AfterViewInit, OnInit {

  symbol: HTMLCanvasElement

  @ViewChild("symbol") symbolView: ElementRef

  ngOnInit(): void {
    this.symbol = this.makeSymbol()
  }

  ngAfterViewInit(): void {
    let e: HTMLSpanElement = this.symbolView.nativeElement
    e.appendChild(this.symbol)
  }

  makeSymbol(): HTMLCanvasElement {
    return new MS.symbol(this.symbolData.sidc, {
      size: this.symbolData.symbolSize,
      icon: this.symbolData.icon,
      uniqueDesignation: this.symbolData.uniqueDesignation,
      infoSize: 70
    }).getMarker().asCanvas()
  }


  @Input()
  symbolData: SymbolInput

}


