import {Component} from '@angular/core';


@Component({
  selector: 'england',
  templateUrl: './england.component.html',
  styleUrls: ['./england.css']
})
export class england {
   barChartLabels: string[] = ['Manchester United FC', 'Tottenham Hotspur FC', 'AFC Bournemouth', 'Aston Villa FC',
    'Everton FC', 'Watford FC', 'Leicester City FC', 'Sunderland AFC', 'Norwich City FC', 'Crystal Palace FC', 'Chelsea FC'
   , 'Swansea City FC', 'Newcastle United FC', 'Southampton FC', 'Arsenal FC', 'West Ham United FC', 'Stoke City FC'
   , 'Liverpool FC', 'West Bromwich Albion FC', 'Manchester City FC' ];
  barChartType: string = 'bar';
  barChartLegend: boolean = true;
  barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

public barChartData:any[] = [
    {data: [9, 8, 16, 13, 11, 3, 6, 8, 11,      9, 5, 7, 8, 11, 7, 6, 6, 11, 7, 4], label: 'from England'},
    {data: [13, 16, 12, 13, 14, 21, 17, 21, 17, 17, 18, 20, 20, 17, 21, 21, 19, 14, 13, 20], label: 'outside England'}
  ];
  constructor() {
  }






}
