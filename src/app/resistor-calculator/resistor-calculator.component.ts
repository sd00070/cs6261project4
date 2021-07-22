import { Component, OnInit } from '@angular/core';
import { ResistorService } from '../services/resistor.service';

@Component({
  selector: 'app-resistor-calculator',
  templateUrl: './resistor-calculator.component.html',
  styleUrls: ['./resistor-calculator.component.scss']
})
export class ResistorCalculatorComponent implements OnInit {

  public ohms: string = '865M'
  public tolerance = 0.1

  public firstDigit = 0
  public secondDigit = 0
  public thirdDigit = 0

  public significantDigitsObject = {}
  public multipliersObject = {}
  public tolerancesObject = {}

  constructor(public resistorService: ResistorService) { }

  ngOnInit(): void {
    this.ohms = this.resistorService.ohms
    this.tolerance = this.resistorService.tolerance

    this.significantDigitsObject = this.resistorService.significantDigitsObject

    this.multipliersObject = this.resistorService.multipliersObject

    this.tolerancesObject = this.resistorService.tolerancesObject

    this.updateOhms()
  }

  public updateFirst(event) {
    this.firstDigit = event
    this.updateOhms()
  }

  public updateTolerance(event) {
    console.log(event)
    this.resistorService.toleranceColor = 'cyan'
  }

  public updateOhms() {
    this.ohms = `${this.firstDigit}${this.secondDigit}${this.thirdDigit}`
  }
}
