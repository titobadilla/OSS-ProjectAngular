import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { MeasurementUnitService } from '../measurement-unit.service';
import { MeasurementUnit } from '../../model/measurementunit.model';

@Component({
  selector: 'app-update-measurement-unit',
  templateUrl: './update-measurement-unit.component.html',
  styleUrls: ['./update-measurement-unit.component.css']
})
export class UpdateMeasurementUnitComponent implements OnInit {
  measurementUnit: MeasurementUnit = new MeasurementUnit();
  constructor(private router: Router, private service: MeasurementUnitService) { }

  ngOnInit() {
   this.measurementUnit.id = parseInt(localStorage.getItem('muid'));
   this.measurementUnit.name = localStorage.getItem('muname');

  }

  updateMeasurementUnit(){
    this.service.updateMeasurementUnit(this.measurementUnit).subscribe(
      (data:MeasurementUnit) =>{
        this.measurementUnit = data;
      }
    )
  }
}
