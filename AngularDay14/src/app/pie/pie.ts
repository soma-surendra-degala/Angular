import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ApexNonAxisChartSeries, ApexChart, ApexResponsive } from 'ng-apexcharts';

@Component({
  selector: 'app-pie',
  standalone: true,
  imports: [CommonModule, RouterModule, NgApexchartsModule],
  templateUrl: './pie.html',
  styleUrls: ['./pie.scss']
})
export class Pie {
  chartSeries: ApexNonAxisChartSeries = [44, 55, 13, 43, 22];

  chartDetails: ApexChart = {
    type: 'pie',
    height: 300
  };

  labels: string[] = ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'];

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
