import {Component, Input, OnChanges} from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class Book implements OnChanges {
  @Input() charts;
  @Input() barCharts;
  teams: any[];
  clone: any[];
  url;
  doughnutChartLabels: string[];
  doughnutChartData: number[];
  doughnutChartType: string;
  myJsonMock;
   barChartLabels: string[] = ['from England', 'outside England'];
   barChartType: string = 'bar';
   barChartLegend: boolean = true;
  barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  barChartData: any[] = [
    {data: [0, 0], label: ''},
  ];
  constructor(private http: Http) {
    this.doughnutChartLabels = ['North America', 'South America', 'Europe', 'Africa', 'Asia', 'Australia'];
    this.doughnutChartData = [0, 0, 0, 0, 0 , 0];
    this.doughnutChartType = 'doughnut';
    this.barCharts = [0, 0];
   /* for (let id = 0; id < 20; id++) {
      this.url = 'http://api.football-data.org/v1/teams/' + id + '/players';
      this.http.get(this.url).subscribe((data) => {
        this.myJsonMock = data.json();
      });
  */
    }

  ngOnChanges() {
    console.log(this.charts);
   this.doughnutChartData = this.charts;
  }





}
