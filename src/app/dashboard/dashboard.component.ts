import { Component, ViewChild } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { ApexAxisChartSeries, ApexChart, ApexTitleSubtitle, ApexXAxis, ChartComponent } from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent  {
 
  @ViewChild("futsal") futsal!: ChartComponent;
  public futsalchartOptions: ChartOptions = {
      series: [
        {
          name: "Alunos",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }
      ],
      chart: {
        width: 600,
        height: 300,
        type: "bar"
      },
      title: {
        text: "Futsal "
      },
      xaxis: {
        categories: ["Jan", "Feb",  "Mar",  "Apr",  "May",  "Jun",  "Jul",  "Aug", "Sep"]
      },
    };

  @ViewChild("volei") volei!: ChartComponent;
  public voleichartOptions: ChartOptions = {
      series: [
        {
          name: "Alunos",
          data: [100, 71, 27, 51, 36, 65, 33, 19, 18]
        }
      ],
      chart: {
        width: 600,
        height: 300,
        type: "bar"
      },
      title: {
        text: "Volei "
      },
      xaxis: {
        categories: ["Jan", "Feb",  "Mar",  "Apr",  "May",  "Jun",  "Jul",  "Aug", "Sep"]
      }
    };
    @ViewChild("basquete") basquete!: ChartComponent;
    public basquetechartOptions: ChartOptions = {
        series: [
          {
            name: "Alunos",
            data: [150, 205, 3, 120, 45, 72, 30, 48, 0]
          }
        ],
        chart: {
          width: 1200,
          height: 350,
          type: "line"
        },
        title: {
          text: "Basquete "
        },
        xaxis: {
          categories: ["Jan", "Feb",  "Mar",  "Apr",  "May",  "Jun",  "Jul",  "Aug", "Sep"]
        }
      };

  }






