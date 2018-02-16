import {Component, EventEmitter, OnChanges, Output} from '@angular/core';
import {Http} from "@angular/http";
import { jsonService } from '../jsonService';
import {isUndefined} from "util";


@Component({
  selector: 'teamsComponent',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})


export class teamsComponent   {
  teams: any [];
  imagepath = '/assets/images/';
  url;
  myJsonDataLangLat;
  latLng: any[];
  shortNames;
  cache: {};

  @Output() updtaeMap: EventEmitter<any> = new EventEmitter<any>();
  constructor(private http: Http, private jsonService: jsonService ) {
    this.jsonService.getData('short_names').subscribe((data) =>{
      this.shortNames = data;
    });
  this.cache = {};
  this.latLng = [];
   /*this.url = 'http://api.football-data.org/v1/competitions/398/teams ';
      this.http.get(this.url).subscribe((data) => {
        this.myJsonMock = data.json();
      });
     */
    this.teams = [
      {name: 'Manchester United FC', data: 'mufc' , image: this.imagepath + 'Manchester_United_FC.svg'},
      {name: 'Tottenham Hotspur FC', data: 'thfc', image: this.imagepath + 'Tottenham_Hotspur.svg'},
      {name: 'AFC Bournemouth', data: 'afcb', image: this.imagepath + 'Afc_bournemouth.svg'},
      {name: 'Aston Villa FC', data: 'avfc', image: this.imagepath + 'Aston_Villa_logo.svg'},
      {name: 'Everton FC', data: 'efc', image: this.imagepath + 'Everton_FC.svg'},
      {name: 'Watford FC', data: 'watford', image: this.imagepath + 'Watford.svg'},
      {name: 'Leicester City FC', data: 'lcfc', image: this.imagepath + 'Leicester02.png'},
      {name: 'Sunderland AFC', data: 'sun', image: this.imagepath + 'AFC_Sunderland.svg'},
      {name: 'Norwich City FC', data: 'ncfc', image: this.imagepath + 'Norwich_City.svg'},
      {name: 'Crystal Palace FC', data: 'cry', image: this.imagepath + 'Crystal_Palace_F.C._logo_(2013).png'},
      {name: 'Chelsea FC', data: 'cfc', image: this.imagepath + 'Chelsea_crest.svg'},
      {name: 'Swansea City FC', data: 'swa', image: this.imagepath + 'Swansea_City_Logo.svg'},
      {name: 'Newcastle United FC', data: 'nufc', image: this.imagepath + 'Newcastle_United_Logo.svg'},
      {name: 'Southampton FC', data: 'sfc', image: this.imagepath + 'FC_Southampton.svg'},
      {name: 'Arsenal FC', data: 'afc', image: this.imagepath + 'Arsenal_FC.svg'},
      {name:  'West Ham United FC', data: 'whu', image: this.imagepath + 'West_Ham_United_FC.svg'},
      {name: 'Stoke City FC', data: 'scfc', image: this.imagepath + 'Stoke_City.svg'},
      {name: 'Liverpool FC', data: 'lfc', image: this.imagepath + 'FC_Liverpool.svg'},
      {name: 'West Bromwich Albion FC', data: 'wba', image: this.imagepath + 'West_Bromwich_Albion.svg'},
      {name: 'Manchester City FC', data: 'mcfc', image: this.imagepath + 'Manchester_City_FC_badge.svg'}];
      let england = [0, 0];
      for (let team of this.teams){
        this.jsonService.getData(team.data).subscribe((data) => {
          for (let player of data){
              if (player.nationality === 'England') {
                england[0] += 1;
              }else {
                england[1] += 1;
              }
          }
          team["england"] = england;
          england = [0, 0];
        });
      }
  }

    activateMap(teamData, Continents, England) {
    this.updtaeMap.emit([teamData, Continents, England]);

  }

  activateMap2(teamName) {
    this.jsonService.getData(teamName).subscribe((data) => this.updatePlayers(data, teamName));
  }
  updatePlayers(data, teamName) {
      let latLng;
      let short;
      let Continents = [0, 0, 0, 0, 0, 0];
      if (!this.cache.hasOwnProperty(teamName)) {
        for (let player of  data) {
          this.url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + player.nationality.toLowerCase() +
            '&KEY=AIzaSyCUkOPfVeBoeaQevoYqRp1QmB2JewqYjjc\n\n ';
          this.http.get(this.url).subscribe((dataLatLng) => {
            latLng = dataLatLng.json().results[0].geometry.location;
            if (dataLatLng.json().results[0].address_components.length > 1) {
              short = dataLatLng.json().results[0].address_components[length - 1].short_name;
            } else {
              short = dataLatLng.json().results[0].address_components[0].short_name;
            }
            player.latitude = latLng.lat;
            player.Longitude = latLng.lng;
            this.calcContinents(short, Continents);
          });
        }
        this.cache[teamName] = [data, Continents];
        console.log(Continents);
        setTimeout(() =>  this.updtaeMap.emit(this.cache[teamName])
          , 1000);
      }else {
        this.updtaeMap.emit(this.cache[teamName]);
      }

  }
  calcContinents(shortName, continents) {
    let cont = this.shortNames[shortName];
    switch (cont) {
      case 'North America':
        continents[0] += 1;
        break;
      case 'South America':
        continents[1] += 1;
        break;
      case 'Europe':
        continents[2] += 1;
        break;
      case 'Africa':
        continents[3] += 1;
        break;
      case 'Asia':
        continents[4] += 1;
        break;
      case 'Australia':
        continents[5] += 1;
        break;
    }
  }
  calcEngland(data) {

  }

}
