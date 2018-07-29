﻿using AutoMapper;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using HometaskEntity.BLL.Contracts;
using HometaskEntity.BLL.DTOs;
using HometaskEntity.BLL.Service;
using HometaskEntity.DAL.Contracts;
using HometaskEntity.DAL;
using HometaskEntity.DAL.Models;
using HometaskEntity.DAL.Repositories;
using Microsoft.EntityFrameworkCore;

namespace HometaskEntity
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();
            services.AddAutoMapper();
            services.AddScoped<IService<AviatorDTO>, AviatorService>();
            services.AddScoped<IService<CrewDTO>, CrewService>();
            services.AddScoped<IService<DepartureDTO>, DepartureService>();
            services.AddScoped<IService<FlightDTO>, FlightService>();
            services.AddScoped<IService<PlaneDTO>, PlaneService>();
            services.AddScoped<IService<StewardessDTO>, StewardessService>();
            services.AddScoped<IService<TicketDTO>, TicketService>();
            services.AddScoped<IService<TypePlaneDTO>, TypePlaneService>();
            services.AddScoped<IUnitOfWork, UnitOfWork>();
            services.AddScoped<DataSource>();
            var connectionString = @"Server=(localdb)\mssqllocaldb;Database=AirportDB;Trusted_Connection=True;";
            services.AddDbContext<AirportContext>(options =>
            options.UseSqlServer(connectionString, b => b.MigrationsAssembly("HometaskEntity")));
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, AirportContext context)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseCors(builder => builder.WithOrigins("http://localhost:4200").AllowCredentials().AllowAnyHeader().AllowAnyMethod());

            app.UseMvc();
            new DataSource(context);
        }
    }
}
