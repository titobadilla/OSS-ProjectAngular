import { Component, OnInit } from '@angular/core';
import { WorkOrderService } from '../work-order-service';
import { WorkOrder } from '../../model/workOrder.model';

@Component({
  selector: 'app-insert-work-order',
  templateUrl: './insert-work-order.component.html',
  styleUrls: ['./insert-work-order.component.css']
})
export class InsertWorkOrderComponent implements OnInit {

  workOrder: WorkOrder = new WorkOrder();
  constructor(private service: WorkOrderService) { }

  ngOnInit() {
  }

  public insert(){
    this.service.insertWorkOrder(this.workOrder).subscribe(
      data => this.workOrder = data
    )
  }
}
