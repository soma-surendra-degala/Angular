import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { NgApexchartsModule } from 'ng-apexcharts';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexPlotOptions
} from 'ng-apexcharts';

@Component({
  selector: 'app-bar',
  standalone: true,
  imports: [CommonModule, RouterModule, NgApexchartsModule],
  templateUrl: './bar.html',
  styleUrls: ['./bar.scss']
})
export class Bar {
  chartSeries: ApexAxisChartSeries = [
    {
      name: 'Sales',
      data: [89, 54, 69, 75, 43, 97, 92]
    }
  ];

  chartDetails: ApexChart = {
    type: 'bar',
    height: 300
  };

  colors: string[] = ['#f39f0eff'];

  xAxis: ApexXAxis = {
    categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  };

  plotOptions: ApexPlotOptions = {
    bar: {
      borderRadius: 5,
      horizontal: false,
       distributed: false
    }
  };

  dataLabels: ApexDataLabels = {
    enabled: false
  };

  constructor(private router: Router) {}

  goToLine() {
    this.router.navigate(['line']);
  }

  goToBar() {
    this.router.navigate(['bar']);
  }

  goToPie() {
    this.router.navigate(['pie']);
  }

  goToDough() {
    this.router.navigate(['doughnut']);
  }
}
