import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Unit } from 'src/app/interfaces/unit';
import { FilterService } from 'src/app/services/filter.service';
import { UnitsService } from 'src/app/services/units.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit{

  unitsList: Unit[] = [];
  form!: FormGroup;
  filteredResults: Unit[] = [];

  constructor(
    private unitsService: UnitsService,
    private formBuilder: FormBuilder,
    private filterService: FilterService
  ){}



  ngOnInit(): void {
    this.form = this.formBuilder.group({
      hour: '',
      showClosed: true
    })


    this.unitsService.getUnits().subscribe(data => {
      this.unitsList = data;
      this.filteredResults = data
    })

  }



  onSubmit(){
    let {showClosed, hour} = this.form.value
    this.filteredResults = this.filterService.filter(this.unitsList, showClosed, hour)
    this.unitsService.setFilteredUnits(this.filteredResults)
  }

  onClean(){
    this.form.reset()
  }


}
