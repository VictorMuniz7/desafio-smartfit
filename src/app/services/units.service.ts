import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UnitsResponse } from '../interfaces/units-response';
import { Unit } from '../interfaces/unit';

@Injectable({
  providedIn: 'root'
})
export class UnitsService {

  private readonly baseUrl = 'https://test-frontend-developer.s3.amazonaws.com/data/locations.json'

  private allUnitsSubject: BehaviorSubject<Unit[]> = new BehaviorSubject<Unit[]>([]);
  private allUnits$: Observable<Unit[]> = this.allUnitsSubject.asObservable();
  private filteredUnits: Unit[] = []

  constructor(private http: HttpClient) {
    http.get<UnitsResponse>(this.baseUrl).subscribe(data => {
      this.allUnitsSubject.next(data.locations)
      this.filteredUnits = data.locations
    })
   }

  getUnits(): Observable<Unit[]>{
    return this.allUnits$
  }

  getFilteredUnits(){
    return this.filteredUnits
  }

  setFilteredUnits(value: Unit[]){
    this.filteredUnits = value;
  }
}
