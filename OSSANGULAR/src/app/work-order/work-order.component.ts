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

  workOrders: WorkOrder[];
  workOrder: WorkOrder;
  workOrderEdit: WorkOrder;
  deleteWorkOrder: WorkOrder;
  workOrderId: number;

  primario: boolean = true;
  secundario: boolean = false;
  modalDelete = false;
  

  constructor(private serviceWorkOrder: WorkOrderService) { 
    this.getAllWorkOrders();
  }

  ngOnInit() {

  }

  public getAllWorkOrders(){
    this.serviceWorkOrder.getAllWorkOrderswithoutEmployee().subscribe(
      (data: WorkOrder[]) =>{
        this.workOrders = data;
      });
  }

  
  showModal(workOrder:WorkOrder) {
    this.deleteWorkOrder=workOrder;
    this.modalDelete = true;
  }

  hideModal() {
    this.deleteWorkOrder=new WorkOrder();
    this.modalDelete = false;
  }

  aceptDelete(){
    this.serviceWorkOrder.deleteWorkOrder(this.deleteWorkOrder.id).subscribe();
    this.getAllWorkOrders
    this.modalDelete = false;
    this.getAllWorkOrders();
  }

  edit(workOrder:WorkOrder){
    this.workOrderId=workOrder.id;
    this.workOrderEdit=workOrder;
    this.primario=false;
    this.secundario=true;

}

}
