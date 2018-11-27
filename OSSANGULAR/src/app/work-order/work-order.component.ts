import { Component, OnInit } from '@angular/core';
import { WorkOrder } from '../model/workOrder.model';
import { WorkOrderService } from './work-order-service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-work-order',
  templateUrl: './work-order.component.html',
  styleUrls: ['./work-order.component.css']
})
export class WorkOrderComponent implements OnInit {

  workOrdes: WorkOrder[];
  workOrder: WorkOrder;
  workOrderEdit: WorkOrder;
  deleteWorkOrder: WorkOrder;
  workOrderId: number;

  primario: boolean = true;
  secundario: boolean = false;
  modalDelete = false;

  constructor(private router: Router, private service: WorkOrderService) { }

  ngOnInit() {
    this.service.getAllWorkOrders().subscribe(
      (data: WorkOrder[]) =>{
        this.workOrdes = data;
      });
  }

}
