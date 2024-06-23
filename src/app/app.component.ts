import { Component } from '@angular/core';
import { Data, RouterOutlet } from '@angular/router';
import {Chart} from 'chart.js/auto';
import { from } from 'rxjs';
import { CommomserviceService } from '../commomservice.service';
import { Employee } from './employee.model';
import { ApiResponse } from './api-response.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'chart';
  data: any;
  empData: string[] = [];
  empId: string[] = [];
  empName: string[] = [];
  empAddress: string[] = [];
  empJoinDate: string[] = [];
  empSalary: number[] = [];

  constructor(private _commonService: CommomserviceService){
  
  }

  ngOnInit() {
    this._commonService.showdata().subscribe((res: ApiResponse) => {
      this.data = res.data; // Access the 'data' property of the response
      if (this.data != null) {
        for (let i = 0; i < this.data.length; i++) {
          this.empId.push(this.data[i].empId);
          this.empName.push(this.data[i].empName);
          this.empAddress.push(this.data[i].empAddress);
          this.empJoinDate.push(this.data[i].empJoinDate);
          this.empSalary.push(this.data[i].salary);
          console.log( this.empSalary.push(this.data[i].salary));
        }
      }
    });
  
    this.showchartData();
  }

  showchartData() {
    const ctx = document.getElementById('myChart') as HTMLCanvasElement;
    if (ctx) {
      const chart = new Chart(ctx, {
        type: 'bar', // or any other chart type
        data: {
          labels: this.empId,
          datasets: [{
            label: 'Employee IDs',
            data: this.empName.map((_, index) => index + 1), // Example transformation
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    } else {
      console.error('Failed to acquire context from the given item');
    }
  }
}

