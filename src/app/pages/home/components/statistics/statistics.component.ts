import { Component } from '@angular/core';
import { ChartConfiguration, ChartType, Chart, Filler } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { LineController, LineElement, PointElement, LinearScale, Title, CategoryScale } from 'chart.js';

Chart.register(Filler);


@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
  standalone: true,
  imports: [BaseChartDirective]
})
export class StatisticsComponent {
  constructor() {
    // Registrar los componentes de Chart.js
    Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale);
  }

  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40],
        label: 'Cantidad de Participantes',
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: 'rgba(148,159,177,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      }
    ],
    labels: ['2017', '2018', '2019', '2020', '2021', '2022', '2023']
  };

  public lineChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };

  public lineChartType: ChartType = 'line';
}
