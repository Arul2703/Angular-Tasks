import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EmployeeApp';
  showSalary: boolean = true; // Initially showing salary
  employees = [
    { id: 456, name: 'Ravi', designation: 'SSE', location: 'Hyderabad', address: 'Hitech City', salary: 750000, showSalary: true },
    { id: 102, name: 'Manoj', designation: 'TL', location: 'Chennai', address: 'Mount Road', salary: 850000, showSalary: true },
    { id: 105, name: 'Ramesh', designation: 'SE', location: 'Coimbatore', address: 'Gandhipuram', salary: 650000, showSalary: true },
    { id: 340, name: 'Suresh', designation: 'SSE', location: 'Madurai', address: 'Anna Nagar', salary: 800000, showSalary: true },
    { id: 688, name: 'Sam', designation: 'SE', location: 'Trichy', address: 'Thillai Nagar', salary: 700000, showSalary: true },
    { id: 478, name: 'Ram', designation: 'SSE', location: 'Salem', address: 'Shevapet', salary: 720000, showSalary: true },
    { id: 346, name: 'Jai', designation: 'TL', location: 'Tirunelveli', address: 'Palayamkottai', salary: 900000, showSalary: true },
    { id: 457, name: 'Kamal', designation: 'M', location: 'Pondicherry', address: 'White Town', salary: 780000, showSalary: true },
    { id: 124, name: 'Mona', designation: 'SE', location: 'Erode', address: 'Gandhiji Road', salary: 600000, showSalary: true },
    { id: 789, name: 'Arjun', designation: 'SSE', location: 'Vellore', address: 'Katpadi', salary: 850000, showSalary: true }
  ];
  

  toggleSalaryVisibility() {
    this.showSalary = !this.showSalary;
  }
}
