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

    this.significantDigitsObject = {
      black: 0,
      brown: 1,
      red: 2,
      orange: 3,
      yellow: 4,
      green: 5,
      blue: 6,
      violet: 7,
      grey: 8,
      white: 9
    }

    this.multipliersObject = {
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

    this.tolerancesObject = {
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
}
