import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.scss'
})
export class EmployeeDetailsComponent implements OnInit{
  employees: any;

  constructor(private EmployeeService: EmployeeService) { }

  ngOnInit() {
    this.employees = this.EmployeeService.getEmployees();
  }
}
