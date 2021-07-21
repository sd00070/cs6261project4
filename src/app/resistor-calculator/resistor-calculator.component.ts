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

  public significantDigitsObject = {}
  public multipliersObject = {}
  public tolerancesObject = {}

  constructor(private resistorService: ResistorService) { }

  ngOnInit(): void {
    this.ohms = this.resistorService.ohms
    this.tolerance = this.resistorService.tolerance

    this.significantDigitsObject = this.resistorService.significantDigitsObject

    this.multipliersObject = this.resistorService.multipliersObject

    this.tolerancesObject = this.resistorService.tolerancesObject
  }
}
