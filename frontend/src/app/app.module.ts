import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FlightsComponent } from './flights/flights.component';
import { FlightListComponent } from './flights/flight-list/flight-list.component';
import { FlightDetailsComponent } from './flights/flight-details/flight-details.component';
import { FlightService } from './services/flight.service';
import { FormsModule } from '@angular/forms';
import { AviatorsComponent } from './aviators/aviators.component';
import { AviatorsListComponent } from './aviators/aviators-list/aviators-list.component';
import { AviatorsDetailsComponent } from './aviators/aviators-details/aviators-details.component';
import { AviatorService } from './services/aviator.service';
import { DeparturesComponent } from './departures/departures.component';
import { DeparturesListComponent } from './departures/departures-list/departures-list.component';
import { DeparturesDetailsComponent } from './departures/departures-details/departures-details.component';
import { CrewsComponent } from './crews/crews.component';
import { CrewsListComponent } from './crews/crews-list/crews-list.component';
import { CrewsDetailsComponent } from './crews/crews-details/crews-details.component';
import { CrewService } from './services/crew.service';
import { StewardessesComponent } from './stewardesses/stewardesses.component';
import { StewardessesListComponent } from './stewardesses/stewardesses-list/stewardesses-list.component';
import { StewardessesDetailsComponent } from './stewardesses/stewardesses-details/stewardesses-details.component';
import { StewardessService } from './services/stewardess.service';
import { PlanesComponent } from './planes/planes.component';
import { PlanesDetailsComponent } from './planes/planes-details/planes-details.component';
import { PlanesListComponent } from './planes/planes-list/planes-list.component';
import { PlaneService } from './services/plane.service';
import { TypesPlaneComponent } from './types-plane/types-plane.component';
import { TypesPlaneDetailsComponent } from './types-plane/types-plane-details/types-plane-details.component';
import { TypesPlaneListComponent } from './types-plane/types-plane-list/types-plane-list.component';
import { TypePlaneService } from './services/typesPlane.service';
import { TicketsComponent } from './tickets/tickets.component';
import { TicketsListComponent } from './tickets/tickets-list/tickets-list.component';
import { TicketsDetailsComponent } from './tickets/tickets-details/tickets-details.component';
import { TicketService } from './services/ticket.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FlightsComponent,
    FlightListComponent,
    FlightDetailsComponent,
    AviatorsComponent,
    AviatorsListComponent,
    AviatorsDetailsComponent,
    DeparturesComponent,
    DeparturesListComponent,
    DeparturesDetailsComponent,
    CrewsComponent,
    CrewsListComponent,
    CrewsDetailsComponent,
    StewardessesComponent,
    StewardessesListComponent,
    StewardessesDetailsComponent,
    PlanesComponent,
    PlanesDetailsComponent,
    PlanesListComponent,
    TypesPlaneComponent,
    TypesPlaneDetailsComponent,
    TypesPlaneListComponent,
    TicketsComponent,
    TicketsListComponent,
    TicketsDetailsComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [HttpClientModule, FlightService, AviatorService, CrewService, StewardessService, PlaneService, TypePlaneService, TicketService],
  bootstrap: [AppComponent]
})
export class AppModule { }