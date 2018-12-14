import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { MeasurementUnitService } from '../measurement-unit.service';
import { MeasurementUnit } from '../../model/measurementunit.model';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-insert-measurement-unit',
  templateUrl: './insert-measurement-unit.component.html',
  styleUrls: ['./insert-measurement-unit.component.css']
})
export class InsertMeasurementUnitComponent implements OnInit {
  public sucess= false;
  measurementUnit: MeasurementUnit = new MeasurementUnit();
  constructor(private router: Router, private service: MeasurementUnitService) { }

  ngOnInit() {

  }

  createMeasurementUnit(form: NgForm): void {
    if (form.valid) {
      this.service.insertMeasurementUnit(this.measurementUnit)
        .subscribe(data => {

        });
      form.reset();
      this.sucess = true;
      setInterval(() => {
        this.sucess = false;
      }, 4000);
    }
  }



}
