import { Component, OnInit } from '@angular/core';
import { ResistorService } from '../services/resistor.service';

@Component({
  selector: 'app-debug-panel',
  templateUrl: './debug-panel.component.html',
  styleUrls: ['./debug-panel.component.scss']
})
export class DebugPanelComponent implements OnInit {

  public first = ''
  public second = ''
  public third = ''

  public multiplier = ''
  public tolerance = ''

  constructor(private resistorService: ResistorService) { }

  ngOnInit(): void {
    this.first = this.resistorService.firstDigitColor
    this.second = this.resistorService.secondDigitColor
    this.third = this.resistorService.thirdDigitColor

    this.multiplier = this.resistorService.multiplierColor

    this.tolerance = this.resistorService.toleranceColor
  }
}
