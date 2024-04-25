import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-info-area',
  templateUrl: './info-area.component.html',
  styleUrl: './info-area.component.css'
})
export class InfoAreaComponent {

  @Input() data: any;
}
