import { Injectable } from '@angular/core';
import { Environment } from '../app.environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private http: HttpClient) { }
    
  URLAPI=Environment.apiUrl;

  public getAllEmployees(): Observable<Employee[]>{
      return this.http.get<Employee[]>(this.URLAPI+'employee/');
  }

  public getByIdEmployee(id: number):Observable<Employee>{
      return this.http.get<Employee>(this.URLAPI+'employee/find/'+id);
  }

  public insertEmployee(employee: Employee):Observable<Employee>{
      return this.http.post<Employee>(this.URLAPI+'employee/addEmployee', employee);
  }
  
  public updateEmployee(employee:Employee):Observable<Employee>{
    return this.http.put<Employee>(this.URLAPI+'employee/' + employee.id, employee);
  }

  public deleteEmployee(id:number):Observable<Employee>{
    return this.http.delete<Employee>(this.URLAPI+'employee/'+ id);
  }
}