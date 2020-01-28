import { Component, OnInit, NgModule } from '@angular/core';

import { AppComponent } from '../app.component';

export interface PeriodicElement {
  name: string;
  position: name;
  weight: number;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 'Triggerpoint', name: 'Per consult van 45 minuten', weight: 1.0079,},
  {position: 'Dry needling', name: 'Per consult van 45 minuten', weight: 4.0026, },
  {position: 'Ergon IASTM fascia ', name: 'Per consult van 30 of 45 minuten', weight: 6.941, },
  {position: 'Shiatsu', name: 'Beryllium', weight: 9.0122, },
  {position: 'Stoelmassage', name: 'Boron', weight: 10.811, },
  {position: 'Taping + Dynamic tape ', name: 'Carbon', weight: 12.0107, },
  {position: 'Sportmassage', name: 'Nitrogen', weight: 14.0067, },
  {position: 'Hotstone massage', name: 'Oxygen', weight: 15.9994, },
  {position: 'Ontspanningsmassage', name: 'Fluorine', weight: 18.9984, },
  
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})



export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight'];
  dataSource = ELEMENT_DATA;
  
  constructor() { 

      }
  ngOnInit() {
  }

}
