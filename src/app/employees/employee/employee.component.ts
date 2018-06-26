import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private employeeService : EmployeeService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(employeeForm : NgForm){
    if(employeeForm.value.$key == null){
      this.employeeService.insertEmployee(employeeForm.value);
      this.toastr.success('Submitted Successfully','Employee Register')
    }
    else{
      this.employeeService.updateEmployee(employeeForm.value);
      this.toastr.success('Submitted Successfully','Employee Details Updated')
    }
    this.resetForm();
    
    
  }

  resetForm(employeeForm? : NgForm){
    if(employeeForm != null){
      employeeForm.reset();
    }
    this.employeeService.selectedEmployee={
      $key : null,
      name : '',
      position : '',
      office : '',
      salary : 0  
    }
  }

}
