import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import { AngularMap } from './googleMap/angularMap.component';
import { Book } from './bookComponent/book.component';
import { jsonService } from './jsonService';
import {teamsComponent} from './teams/teams.component';
import { NguiMapModule} from '@ngui/map';
import { ChartsModule } from 'ng2-charts';
import {england} from './england/england.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularMap,
    Book,
    teamsComponent,
    england
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDZB6z31dXs8usw4Y6MPDEoMnQE0XG2GVg'
    }),
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyDZB6z31dXs8usw4Y6MPDEoMnQE0XG2GVg'}),
    ChartsModule,
    HttpModule
  ],
  providers: [jsonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
