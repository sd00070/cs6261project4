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

  constructor(private resistorService: ResistorService) { }

  ngOnInit(): void {
    this.ohms = this.resistorService.ohms
    this.tolerance = this.resistorService.tolerance
  }

}
