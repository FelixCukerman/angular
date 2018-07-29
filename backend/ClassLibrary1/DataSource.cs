using System;
using System.Linq;
using System.Collections.Generic;
using System.Text;
using HometaskEntity.DAL.Models;
using Microsoft.EntityFrameworkCore;

namespace HometaskEntity.DAL
{
    public class DataSource
    {
        public DataSource(AirportContext airportContext)
        {
            airportContext.Database.EnsureCreated();

            if(!(airportContext.Flights.Any(p => p.PointOfDeparture == "123" && p.Destination == "nulL" && p.ArrivalTime == DateTime.Now && p.TimeOfDeparture == DateTime.Now)))
            {
                List<Aviator> aviators = new List<Aviator>
                {
                    new Aviator { Name = "Alex", Surname = "Harper", Experience = 3, DateOfBirthday = DateTime.MinValue,  },
                    new Aviator { Name = "Qwer", Surname = "Tiger", Experience = 2, DateOfBirthday = DateTime.Now},
                    new Aviator { Name = "Chery", Surname = "Bim", Experience = 1, DateOfBirthday = DateTime.MaxValue}
                };
                airportContext.Aviators.AddRange(aviators);

                List<Crew> crews = new List<Crew>
                {
                    new Crew { aviator = aviators[0], stewardesses = new List<Stewardess>()},
                    new Crew { aviator = aviators[1], stewardesses = new List<Stewardess>()},
                    new Crew { aviator = aviators[2], stewardesses = new List<Stewardess>()}
                };
                airportContext.Crews.AddRange(crews);

                List<Departure> departures = new List<Departure>
                {
                    new Departure { FlightNumber = 111, PlaneId = 100, CrewId = 1, TimeOfDeparture = 12},
                    new Departure { FlightNumber = 222, PlaneId = 200, CrewId = 2, TimeOfDeparture = 13},
                    new Departure { FlightNumber = 333, PlaneId = 300, CrewId = 3, TimeOfDeparture = 9}
                };
                airportContext.Departures.AddRange(departures);

                List<Flight> flights = new List<Flight>
                {
                    new Flight { Destination = "nulL", TicketId = 1, ArrivalTime = DateTime.Now, PointOfDeparture = "123", TimeOfDeparture = DateTime.Now},
                    new Flight { Destination = "Null", TicketId = 2, ArrivalTime = DateTime.Now, PointOfDeparture = "133", TimeOfDeparture = DateTime.Now},
                    new Flight { Destination = "nUll", TicketId = 3, ArrivalTime = DateTime.Now, PointOfDeparture = "153", TimeOfDeparture = DateTime.Now}
                };
                airportContext.Flights.AddRange(flights);

                List<Plane> planes = new List<Plane>
                {
                    new Plane { Name = "qwe", TimeSpan = 3, Type = "A"},
                    new Plane { Name = "rty", TimeSpan = 4, Type = "B"},
                    new Plane { Name = "zxc", TimeSpan = 5, Type = "C"}
                };
                airportContext.Planes.AddRange(planes);

                List<Stewardess> stewardesses = new List<Stewardess>
                {
                    new Stewardess { Name = "Anna", Surname = "Kasparova"},
                    new Stewardess { Name = "Zany", Surname = "Jimova"},
                    new Stewardess { Name = "Sara", Surname = "Binomy"}
                };
                airportContext.Stewardesses.AddRange(stewardesses);

                List<Ticket> tickets = new List<Ticket>
                {
                    new Ticket { Price = 1000},
                    new Ticket { Price = 2000},
                    new Ticket { Price = 3000}
                };
                airportContext.Tickets.AddRange(tickets);

                List<TypePlane> typesPlane = new List<TypePlane>
                {
                    new TypePlane { CarryingCapacity = 1000, CountOfSeats = 60},
                    new TypePlane { CarryingCapacity = 1200, CountOfSeats = 80},
                    new TypePlane { CarryingCapacity = 1500, CountOfSeats = 100}
                };
                airportContext.TypesPlane.AddRange(typesPlane);

                airportContext.SaveChanges();
            }
        }
    }
}