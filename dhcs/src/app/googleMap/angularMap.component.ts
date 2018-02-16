import {Component, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'AngularMap',
  templateUrl: './angularMap.html',
  styleUrls: ['./angularMap.css']
})
export class AngularMap implements OnChanges {
  @Input() myjsondata;
  infowindow;
  marker;
  infoplayer;
  constructor() {
    this.myjsondata = [];

  }
  ngOnChanges() {
    console.log(this.myjsondata);
  }
  onMarkerInit() {

  }

  openWindow(t, data) {
    console.log(data);
    console.log(t);
    this.infowindow = true;
    let e = t.target;
    this.infoplayer = data;
    e.nguiMapComponent.openInfoWindow('details', e);

  }


}
