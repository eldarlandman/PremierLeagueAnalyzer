 import { Component } from '@angular/core';
import {jsonService} from "./jsonService";
import {Http} from "@angular/http";
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myjsondata;
  charts;
  barCharts;
  url;
  myJsonDataLangLat;

  constructor(private jsonService: jsonService, private http: Http) {
    this.myjsondata = [];
    this.charts = [0, 0, 0, 0 , 0, 0];
    this.barCharts = [0, 0];


  }

  updateMap(dataName) {
    this.myjsondata = dataName[0];
    this.charts = dataName[1];
    this.barCharts = [0, 0];
  }
}
