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

  private _firstDigitColor: string = ''
  private _secondDigitColor: string = ''
  private _thirdDigitColor: string = ''
  private _multiplierColor: string = ''
  private _toleranceColor: string = ''

  constructor() {
    this._significantDigits = ['0', '0', '0']
    this._firstDigitColor = 'black'
    this._secondDigitColor = 'black'
    this._thirdDigitColor = 'black'

    this._multiplier = 0
    this._multiplierColor = 'black'

    this._tolerance = 20
    this._toleranceColor = 'none'
  }

  private setSignificantDigitFromColor(pos: number, color: string) {
    if (!this.sigDigLookupTable.has(color)) throw new Error('Not a valid color')

    this._significantDigits[pos] = this.sigDigLookupTable.get(color)
  }

  setFirstSignificantDigitFromColor(color: string) {
    this.setSignificantDigitFromColor(0, color)
    this._firstDigitColor = color
  }

  setSecondSignificantDigitFromColor(color: string) {
    this.setSignificantDigitFromColor(1, color)
    this._secondDigitColor = color
  }

  setThirdSignificantDigitFromColor(color: string) {
    this.setSignificantDigitFromColor(2, color)
    this._thirdDigitColor = color
  }

  get firstDigitColor() {
    return this._firstDigitColor
  }

  get secondDigitColor() {
    return this._secondDigitColor
  }

  get thirdDigitColor() {
    return this._thirdDigitColor
  }

  get significantDigits(): number {
    return Number.parseInt(this._significantDigits.reduce((acc, cur) => acc + cur, ''))
  }

  get significantDigitColors(): string[] {
    return Array.from(this.sigDigLookupTable.keys())
  }

  get significantDigitsObject() {
    return Object.fromEntries(this.sigDigLookupTable)
  }

  setMultiplierFromColor(color: string) {
    if (!this.mulLookupTable.has(color)) throw new Error('Not a valid color')

    this._multiplier = this.mulLookupTable.get(color)
  }

  get multiplier() {
    return this._multiplier
  }

  get multiplierColor() {
    return this._multiplierColor
  }

  get multiplierColors(): string[] {
    return Array.from(this.mulLookupTable.keys())
  }

  get multipliersObject() {
    return {
      'x1': 'black',
      'x10': 'brown',
      'x100': 'red',
      'x1K': 'orange',
      'x10K': 'yellow',
      'x100K': 'green',
      'x1M': 'blue',
      'x10M': 'violet',
      'x100M': 'grey',
      'x1G': 'white',
      'x0.1': 'gold',
      'x0.01': 'silver'
    }
  }

  setToleranceFromColor(color: string) {
    if (!this.tolLookupTable.has(color)) throw new Error('Not a valid color')

    this._tolerance = this.tolLookupTable.get(color)
  }

  get tolerance() {
    return this._tolerance
  }

  get toleranceColor() {
    return this._toleranceColor
  }

  get toleranceColors(): string[] {
    return Array.from(this.tolLookupTable.keys())
  }

  get tolerancesObject() {
    return {
      '1%': 'brown',
      '2%': 'red',
      '0.5%': 'green',
      '0.25%': 'blue',
      '0.1%': 'violet',
      '0.05%': 'grey',
      '5%': 'gold',
      '10%': 'silver',
      '20%': 'none',
    }
  }

  get ohms(): string {
    const resistance = this.significantDigits * this.multiplier

    return '' + resistance
  }
}
