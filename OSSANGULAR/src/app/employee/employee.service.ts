import { Injectable } from '@angular/core';
import { Environment } from '../app.environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee.model';
import { TokenStorage } from '../authentication/helper/token-storage';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private http: HttpClient,private token:TokenStorage) { }
    
  URLAPI=Environment.apiUrl;
  reqHeader:any;
  tokenCrypt:any;

  private getTokenHeader(){
    this.tokenCrypt=this.token.getToken();
    if(this.tokenCrypt!=null){
      this.reqHeader = new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.tokenCrypt
     });
    }
    else{
      this.reqHeader=null;      
    }
  }

  public getAllEmployees(): Observable<Employee[]>{
    this.getTokenHeader();
      return this.http.get<Employee[]>(this.URLAPI+'employee/', { headers: this.reqHeader });
  }

  public getByIdEmployee(id: number):Observable<Employee>{
    this.getTokenHeader();
      return this.http.get<Employee>(this.URLAPI+'employee/find/'+id, { headers: this.reqHeader });
  }

  public insertEmployee(employee: Employee):Observable<Employee>{
    this.getTokenHeader();
      return this.http.post<Employee>(this.URLAPI+'employee/addEmployee', employee, { headers: this.reqHeader });
  }
  
  public updateEmployee(employee:Employee):Observable<Employee>{
    this.getTokenHeader();
    return this.http.put<Employee>(this.URLAPI+'employee/' + employee.id, employee, { headers: this.reqHeader });
  }

  public deleteEmployee(id:number):Observable<Employee>{
    this.getTokenHeader();
    return this.http.delete<Employee>(this.URLAPI+'employee/'+ id, { headers: this.reqHeader });
  }
}