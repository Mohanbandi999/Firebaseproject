import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';
import { Employee } from 'src/app/employee.model';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.sass']
})
export class EmployeeListComponent implements OnInit {
  employees:any=[];
  constructor(private employeeService: EmployeeService){}

  ngOnInit(): void {

    this.employeeService.getEmployees().subscribe(data => {
      this.employees = data.map(e => {
        return {
          id: e.payload.doc.id,
          mobile:e.payload.doc.get("mobile"),
          role:e.payload.doc.get("role"),
          email:e.payload.doc.get("email"),
          fullname:e.payload.doc.get("fullname"),
          username:e.payload.doc.get("username"),
          password:e.payload.doc.get("password"),
          hiredate:e.payload.doc.get("hiredate"),
          gender:e.payload.doc.get("gender"),
          address:e.payload.doc.get("address"),

        } as Employee;
      })
    });
  }
  create(employee: Employee){
    this.employeeService.createEmployee(employee);
  }
  update(employee: Employee) {
    this.employeeService.updateEmployee(employee);
  }
  delete(id: string) {
   this.employeeService.deleteEmployee(id);
  }

}
