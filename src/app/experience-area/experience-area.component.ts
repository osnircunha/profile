import {Component, Input} from '@angular/core';

@Component({
  selector: 'experience-area',
  templateUrl: './experience-area.component.html',
  styleUrl: './experience-area.component.css'
})
export class ExperienceAreaComponent {

  @Input() data: any;
}
