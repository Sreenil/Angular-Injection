import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private employees = [
    { id: 1, name: 'Sreenil', position: 'Manager', department: 'IT' },
    { id: 2, name: 'Anakha', position: 'Developer', department: 'IT' },
    { id: 3, name: 'Vivek', position: 'Designer', department: 'Creative' },
    { id: 4, name: 'Manya', position: 'HR', department: 'HR' },
    { id: 5, name: 'Rahul', position: 'Finance', department: 'Finance' }
  ];

  constructor() { }
  
  getEmployees() {
    return this.employees;
  }
  
}
