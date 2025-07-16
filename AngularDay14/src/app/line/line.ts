import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ApexAxisChartSeries, ApexChart, ApexXAxis, ApexDataLabels, ApexStroke } from 'ng-apexcharts';


@Component({
  selector: 'app-line',
  standalone: true,
  imports: [CommonModule, RouterModule,NgApexchartsModule],
  templateUrl: './line.html',
  styleUrls: ['./line.scss']
})
export class Line {
   chartSeries: ApexAxisChartSeries = [
    {
      name: "Sales",
      data: [89, 54, 69, 75, 43, 97, 92]
    }
  ];

  chartDetails: ApexChart = {
    type: "line",
    height: 300
  };

colors: string[] = ['#FE99C7'];

  xAxis: ApexXAxis = {
    categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  };

  stroke: ApexStroke = {
    // curve: "stepline"
    // curve:"monotoneCubic"
    curve:'straight',
    colors:["#dd0a69ff"]
  };

  fill = {
  type: 'solid',
  colors: ['rgba(255, 87, 51, 0.3)']
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
