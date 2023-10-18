import { Component, Input } from '@angular/core';
import { Unit } from 'src/app/interfaces/unit';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() card!: Unit

}
