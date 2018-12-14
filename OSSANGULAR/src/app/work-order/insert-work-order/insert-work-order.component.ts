import { Component, OnInit } from '@angular/core';
import { WorkOrderService } from '../work-order-service';
import { WorkOrder } from '../../model/workOrder.model';
import { WorkOrderType } from 'src/app/model/workOrderType.model';
import { WorkOrderTypeService } from 'src/app/work-order-type/work-order-type.service';
import { ClientService } from 'src/app/client/client-service';
import { Client } from 'src/app/model/client.model';
import { Employee } from 'src/app/model/employee.model';
import { EmployeeService } from 'src/app/employee/employee.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-insert-work-order',
  templateUrl: './insert-work-order.component.html',
  styleUrls: ['./insert-work-order.component.css']
})
export class InsertWorkOrderComponent implements OnInit {

  workOrder: WorkOrder = new WorkOrder();
  workOrdersType: WorkOrderType[] = new Array();
  clients: Client[] = new Array();
  employees: Employee[] = new Array();
  selectedEmployees: String[];
  public sucess = false;


  constructor(private service: WorkOrderService, private serviceWorkOrderTypes: WorkOrderTypeService,
    private serviceClient: ClientService, private serviceEmployee: EmployeeService) { }

  ngOnInit() {
    this.loading();
  }

  private loading() {
    this.serviceWorkOrderTypes.getAllWorkOrdersType().subscribe(data => {
      this.workOrdersType = data;
    });
    this.serviceClient.getAllClients().subscribe(data => {
      this.clients = data
    });

    this.serviceEmployee.getAllEmployees().subscribe(data => {
      this.employees = data
    });
  }

  public createWorkOrder(form: NgForm) {
    let i = 0;

    for (i = 0; i < this.selectedEmployees.length; i++) {
      let employee: Employee = new Employee();
      employee.id = this.selectedEmployees[i];
      this.workOrder.employees.push(employee);
    }
    this.service.insertWorkOrder(this.workOrder).subscribe();
    this.workOrder = new WorkOrder();
    this.selectedEmployees = [];

  }

}

