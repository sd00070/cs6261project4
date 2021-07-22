import { Component, OnInit } from '@angular/core';
import { ResistorService } from '../services/resistor.service';

@Component({
  selector: 'app-debug-panel',
  templateUrl: './debug-panel.component.html',
  styleUrls: ['./debug-panel.component.scss']
})
export class DebugPanelComponent implements OnInit {

  constructor(public resistorService: ResistorService) { }

  ngOnInit(): void { }
}
