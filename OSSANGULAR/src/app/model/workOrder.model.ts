import { Client } from './client.model'; 
import { Employee} from './employee.model';

export class WorkOrder{
    id:number;
    description:String;
    client:Client;
    workOrderType:number;
    employees: Employee[] = new Array();
}