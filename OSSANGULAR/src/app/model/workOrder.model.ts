import { Client } from './client.model'; 
import { Employee} from './employee.model';
import { WorkOrderType } from './workOrderType.model';

export class WorkOrder{
    id:number;
    description:String;
    client:Client=new Client();
    workOrderType:WorkOrderType=new WorkOrderType();
    employees: Employee[] = new Array();
    date: String;
}