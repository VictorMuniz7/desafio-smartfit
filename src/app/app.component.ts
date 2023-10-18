import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Unit } from './interfaces/unit';
import { UnitsService } from './services/units.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'desafio-smartfit';

  showList = new BehaviorSubject(false)
  unitsList: Unit[] = []

  constructor(
    private unitService: UnitsService
  ){}

  onSubmit(){
    this.showList.next(true)
    this.unitsList = this.unitService.getFilteredUnits()
  }
}
