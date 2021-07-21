import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResistorService {

  private sigDigLookupTable: Map<string, string> = new Map([
    ['black', '0'],
    ['brown', '1'],
    ['red', '2'],
    ['orange', '3'],
    ['yellow', '4'],
    ['green', '5'],
    ['blue', '6'],
    ['violet', '7'],
    ['grey', '8'],
    ['white', '9']
  ])

  private mulLookupTable: Map<string, number> = new Map([
    ['black', 1],
    ['brown', 10],
    ['red', 100],
    ['orange', 1000],
    ['yellow', 10000],
    ['green', 100000],
    ['blue', 1000000],
    ['violet', 10000000],
    ['grey', 100000000],
    ['white', 1000000000],
    ['gold', 0.1],
    ['silver', 0.01]
  ])

  private tolLookupTable: Map<string, number> = new Map([
    ['brown', 1],
    ['red', 2],
    ['green', 0.5],
    ['blue', 0.25],
    ['violet', 0.1],
    ['grey', 0.05],
    ['gold', 5],
    ['silver', 10],
    ['none', 20]
  ])

  private _significantDigits: string[]
  private _multiplier: number
  private _tolerance: number

  constructor() {
    this._significantDigits = ['0', '0', '0']
    this._multiplier = 0
    this._tolerance = 20
  }

  private setSignificantDigitFromColor(pos: number, color: string) {
    if (!this.sigDigLookupTable.has(color)) throw new Error('Not a valid color')

    this._significantDigits[pos] = this.sigDigLookupTable.get(color)
  }

  setFirstSignificantDigitFromColor(color: string) {
    this.setSignificantDigitFromColor(0, color)
  }

  setSecondSignificantDigitFromColor(color: string) {
    this.setSignificantDigitFromColor(1, color)
  }

  setThirdSignificantDigitFromColor(color: string) {
    this.setSignificantDigitFromColor(2, color)
  }

  get significantDigits(): number {
    return Number.parseInt(this._significantDigits.reduce((acc, cur) => acc + cur, ''))
  }

  get significantDigitColors(): string[] {
    return Array.from(this.sigDigLookupTable.keys())
  }

  setMultiplierFromColor(color: string) {
    if (!this.mulLookupTable.has(color)) throw new Error('Not a valid color')

    this._multiplier = this.mulLookupTable.get(color)
  }

  get multiplier() {
    return this._multiplier
  }

  get multiplierColors(): string[] {
    return Array.from(this.mulLookupTable.keys())
  }

  setToleranceFromColor(color: string) {
    if (!this.tolLookupTable.has(color)) throw new Error('Not a valid color')

    this._tolerance = this.tolLookupTable.get(color)
  }

  get tolerance() {
    return this._tolerance
  }

  get toleranceColors(): string[] {
    return Array.from(this.tolLookupTable.keys())
  }

  get ohms(): string {
    const resistance = this.significantDigits * this.multiplier

    return '' + resistance
  }
}
