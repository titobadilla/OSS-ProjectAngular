import { Component, OnInit, Input } from '@angular/core';
import { WorkOrder } from 'src/app/model/workOrder.model';
import { WorkOrderType } from 'src/app/model/workOrderType.model';
import { Client } from 'src/app/model/client.model';
import { Employee } from 'src/app/model/employee.model';
import { WorkOrderService } from '../work-order-service';
import { EmployeeService } from 'src/app/employee/employee.service';
import { WorkOrderTypeService } from 'src/app/work-order-type/work-order-type.service';
import { ClientService } from 'src/app/client/client-service';

@Component({
  selector: 'app-update-work-order',
  templateUrl: './update-work-order.component.html',
  styleUrls: ['./update-work-order.component.css']
})
export class UpdateWorkOrderComponent implements OnInit {

  @Input() workOrderId:number;
  idWorkOrder:number;
  workOrder: WorkOrder = new WorkOrder();
  workOrdersType:WorkOrderType[]=new Array();
  clients:Client[]=new Array();
  employees:Employee[]=new Array();
  selectedEmployees:String[]=new Array();
  flagView:boolean=false;

  bandera:boolean=false;

 
  constructor(private service: WorkOrderService,private serviceWorkOrderTypes:WorkOrderTypeService,
    private serviceClient:ClientService,private serviceEmployee:EmployeeService) { 
      this.loading();
      
    }

 
    ngOnInit() {
      this.service.getByIdWorkOrder(this.workOrderId).subscribe(
        data=>{
          this.workOrder=data;
        }
      );
      this.idWorkOrder=this.workOrderId;
    }

    private loadDropDownMultiple(){
     
      let i=0;
     this.selectedEmployees=[];
      for(i=0;i<this.workOrder.employees.length;i++){
        this.selectedEmployees.push(this.workOrder.employees[i].id);
      }
    
    }

    private viewEmployees(){
      
      this.loadDropDownMultiple();
      this.flagView=true;
     
  
    }

    private loading(){
      this.serviceWorkOrderTypes.getAllWorkOrdersType().subscribe(data=>{
        this.workOrdersType=data;
    });
    this.serviceClient.getAllClients().subscribe(data=>{
      this.clients=data
    });
  
    this.serviceEmployee.getAllEmployees().subscribe(data=>{
      this.employees=data
    });
    }

    
  public editWorkOrder(){
    this.workOrder.employees=new Array();
    let i=0;
    for(i=0;i<this.selectedEmployees.length;i++){
      let employee:Employee = new Employee();
      employee.id=this.selectedEmployees[i];
      this.workOrder.employees.push(employee);
    }
   this.service.updateWorkOrder(this.workOrder).subscribe();
   
    
  }

    

}
