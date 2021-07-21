import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resistor-calculator',
  templateUrl: './resistor-calculator.component.html',
  styleUrls: ['./resistor-calculator.component.scss']
})
export class ResistorCalculatorComponent implements OnInit {

  public ohms = 865
  public multiplier = 'M'
  public tolerance = 0.1

  constructor() { }

  ngOnInit(): void {
  }

}