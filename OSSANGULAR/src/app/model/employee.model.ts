import { Role } from './role.model';


export class Employee {
    id:String;
    name:String;
    lastName:String;
    position:String;
    role: Role = new Role();
    username:String;
    password:String;
}
