import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';
import { MeasurementUnitService } from '../measurement-unit.service';
import { MeasurementUnit } from '../../model/measurementunit.model';

@Component({
  selector: 'app-update-measurement-unit',
  templateUrl: './update-measurement-unit.component.html',
  styleUrls: ['./update-measurement-unit.component.css']
})
export class UpdateMeasurementUnitComponent implements OnInit {
  @Input() measurementUnitId:String;
  measurementUnit: MeasurementUnit = new MeasurementUnit();
  idMeasurementUnit: String;

  constructor(private router: Router, private service: MeasurementUnitService) { }

  ngOnInit() {
    this.service.getByIdMeasurementUnit(this.measurementUnitId).subscribe(
      data=>{
        this.measurementUnit=data;
      }
    );
    this.idMeasurementUnit= this.measurementUnitId;
  }

  updateMeasurementUnit(measurementUnit: MeasurementUnit){
    alert("hola");
    this.service.updateMeasurementUnit(this.measurementUnit).subscribe(
      (data:MeasurementUnit) =>{
        this.measurementUnit = data;
      }
    )
  }
}
