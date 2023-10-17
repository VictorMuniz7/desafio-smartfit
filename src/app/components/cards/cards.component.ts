import { Component, OnInit } from '@angular/core';
import { Unit } from 'src/app/interfaces/unit';
import { UnitsService } from 'src/app/services/units.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit{

  unitsList: Unit[] = []

  constructor(
    private unitService: UnitsService
  ){}

  ngOnInit(): void {
    this.unitsList = this.unitService.getFilteredUnits()
    console.log(this.unitsList)
  }


}
