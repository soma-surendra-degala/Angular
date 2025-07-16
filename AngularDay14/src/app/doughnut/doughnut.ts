import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { NgApexchartsModule } from 'ng-apexcharts';
import {
  ApexNonAxisChartSeries,
  ApexChart,
  ApexResponsive,
  ApexPlotOptions
} from 'ng-apexcharts';

@Component({
  selector: 'app-doughnut',
  standalone: true,
  imports: [CommonModule, RouterModule, NgApexchartsModule],
  templateUrl: './doughnut.html',
  styleUrls: ['./doughnut.scss']
})
export class Doughnut {
  chartSeries: ApexNonAxisChartSeries = [25, 15, 44, 55, 41];

  chartDetails: ApexChart = {
    type: 'donut',
    height: 300
  };

  labels: string[] = ['Chrome', 'Firefox', 'Safari', 'Edge', 'Others'];

  responsive: ApexResponsive[] = [
    {
      breakpoint: 480,
      options: {
        chart: { width: 200 },
        legend: { position: 'bottom' }
      }
    }
  ];

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
