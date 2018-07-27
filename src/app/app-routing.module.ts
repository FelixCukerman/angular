import { NgModule } from '@angular/core';
import { Routes, RouterModule, ChildrenOutletContexts } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FlightsComponent } from './flights/flights.component';
import { FlightListComponent } from './flights/flight-list/flight-list.component';
import { FlightDetailsComponent } from './flights/flight-details/flight-details.component';
import { AviatorsComponent } from './aviators/aviators.component';
import { AviatorsListComponent } from './aviators/aviators-list/aviators-list.component';
import { AviatorsDetailsComponent } from './aviators/aviators-details/aviators-details.component';
import { DeparturesComponent } from './departures/departures.component';
import { DeparturesListComponent } from './departures/departures-list/departures-list.component';
import { DeparturesDetailsComponent } from './departures/departures-details/departures-details.component';
import { CrewsListComponent } from './crews/crews-list/crews-list.component';
import { CrewsDetailsComponent } from './crews/crews-details/crews-details.component';
import { StewardessesComponent } from './stewardesses/stewardesses.component';
import { StewardessesListComponent } from './stewardesses/stewardesses-list/stewardesses-list.component';
import { StewardessesDetailsComponent } from './stewardesses/stewardesses-details/stewardesses-details.component';
import { PlanesComponent } from './planes/planes.component';
import { PlanesListComponent } from './planes/planes-list/planes-list.component';
import { PlanesDetailsComponent } from './planes/planes-details/planes-details.component';
import { TypesPlaneComponent } from './types-plane/types-plane.component';
import { TypesPlaneListComponent } from './types-plane/types-plane-list/types-plane-list.component';
import { TypesPlaneDetailsComponent } from './types-plane/types-plane-details/types-plane-details.component';
import { TicketsComponent } from './tickets/tickets.component';
import { TicketsListComponent } from './tickets/tickets-list/tickets-list.component';
import { TicketsDetailsComponent } from './tickets/tickets-details/tickets-details.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/dashboard'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'flights',
    component: FlightsComponent,
    children:
    [
      {
        path: '',
        component: FlightListComponent
      },
      {
        path: ':id',
        component: FlightDetailsComponent
      }
    ]
  },
  {
    path: 'aviators',
    component: AviatorsComponent,
    children:
    [
      {
        path: '',
        component: AviatorsListComponent
      },
      {
        path: ':id',
        component: AviatorsDetailsComponent
      }
    ]
  },
  {
    path: 'departures',
    component: DeparturesComponent,
    children:
    [
      {
        path: '',
        component: DeparturesListComponent
      },
      {
        path: ':id',
        component: DeparturesDetailsComponent
      }
    ]
  },
  {
    path: 'crews',
    component: DeparturesComponent,
    children:
    [
      {
        path: '',
        component: CrewsListComponent
      },
      {
        path: ':id',
        component: CrewsDetailsComponent
      }
    ]
  },
  {
    path: 'stewardesses',
    component: StewardessesComponent,
    children:
    [
      {
        path: '',
        component: StewardessesListComponent
      },
      {
        path: ':id',
        component: StewardessesDetailsComponent
      }
    ]
  },
  {
    path: 'planes',
    component: PlanesComponent,
    children:
    [
      {
        path: '',
        component: PlanesListComponent
      },
      {
        path: ':id',
        component: PlanesDetailsComponent
      }
    ]
  },
  {
    path: 'typesplane',
    component: TypesPlaneComponent,
    children:
    [
      {
        path: '',
        component: TypesPlaneListComponent
      },
      {
        path: ':id',
        component: TypesPlaneDetailsComponent
      }
    ]
  },
  {
    path: 'tickets',
    component: TicketsComponent,
    children:
    [
      {
        path: '',
        component: TicketsListComponent
      },
      {
        path: ':id',
        component: TicketsDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }