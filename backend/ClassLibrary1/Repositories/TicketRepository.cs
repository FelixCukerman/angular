﻿using System;
using System.Linq;
using System.Collections.Generic;
using System.Text;
using HometaskEntity.DAL.Contracts;
using HometaskEntity.DAL.Models;
using System.Threading.Tasks;

namespace HometaskEntity.DAL.Repositories
{
    public class TicketRepository : IRepository<Ticket>
    {
        private AirportContext data;

        public TicketRepository(AirportContext data)
        {
            this.data = data;
        }
        public async Task<IEnumerable<Ticket>> GetAll()
        {
            return data.Tickets;
        }
        public async Task<Ticket> Get(int id)
        {
            return data.Tickets.FirstOrDefault(x => x.Id == id);
        }
        public async Task Create(Ticket ticket)
        {
            await data.Tickets.AddAsync(ticket);
            await data.SaveChangesAsync();
        }
        public async Task Update(int id, Ticket ticket)
        {
            var item = data.Tickets.FirstOrDefault(x => x.Id == id);
            item = ticket;
            await data.SaveChangesAsync();
        }
        public async Task Delete(int id)
        {
            Ticket ticket = data.Tickets.FirstOrDefault(x => x.Id == id);
            if (ticket != null)
                data.Tickets.Remove(ticket);
            await data.SaveChangesAsync();
        }
    }
}
