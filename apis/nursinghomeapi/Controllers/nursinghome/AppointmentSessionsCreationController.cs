using common;
using common.api;
using common.apirequests;
using common.database;
using Dapper.Contrib.Extensions;
using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;
using System.Security.Cryptography.Xml;

namespace nursinghomeapi.Controllers
{
	[ApiController]
	[Route("[controller]")]
	public class AppoitnmentSessionCreationController : BaseController
	{
	
		[HttpPost(Name = "AppoitnmentSessionCreation")]
		public Response Create(CreateSessionRequest request)
		{
			Response response= new Response();

			try
			{
				List<AppointmentSessionEntity> sesionsToCreate = GetSessionsToCreate(request);

				using (SqlConnection connection = new SqlConnection(Constants.DatabaseConnectionString))
				{
					connection.Open();

					//NursingHomeSessionEntity nursingHome = // get nursing home from supplied guid

					foreach(AppointmentSessionEntity entity in sesionsToCreate)
					{
						connection.Insert(entity);
					}
				}
				response.Success = true;
			}
			catch (Exception ex)
			{
				// TODO
			}
			return response;
		}

		private List<AppointmentSessionEntity> GetSessionsToCreate(CreateSessionRequest request)
		{
			List<AppointmentSessionEntity> sessionList = new List<AppointmentSessionEntity>();

			int nursingHomeId = 1; // TODO: hardcode

			DateTime startingDate = request.Session.StartDate.Date;

			Guid groupIdentifier = Guid.NewGuid();
			DateTime now = DateTime.Now;
			TimeSpan sessionDuration = GetTimePart(request.Session.EndTime) - GetTimePart(request.Session.StartTime);

			if (request.Session.IncludeRecurrence && request.Session.Recurrence != null)
			{
				DateTime startingPoint = request.Session.StartDate;

				int dayCount = 1;
				int week = 1;
				// Recur every 1, 2, 3, 4 weeks

				while (startingPoint.Date.Date < request.Session.Recurrence.EndDate.Date.AddDays(1))
				{
					// is it the correct week
					week = ((dayCount - 1)/ 7) + 1;

					bool activeWeek = ((week -1) % request.Session.Recurrence.RecurEveryWeek) == 0;

					if (activeWeek)
					{
						// go through each day from start to end date
						if (IsDateInRecurrence(startingPoint.Date.Date, request.Session.Recurrence))
						{
							AppointmentSessionEntity session = new AppointmentSessionEntity();
							session.Guid = Guid.NewGuid();
							session.LastUpdateDateTime = now;
							session.CreatedDateTime = now;
							session.GroupIdentifier = groupIdentifier;
							session.NursingHomeId = nursingHomeId;
							session.Name = request.Session.Name;
							session.Rate = request.Session.Rate;

							session.StartDateTime =
								new DateTime(
									startingPoint.Year,
									startingPoint.Month,
									startingPoint.Day,
									request.Session.StartTime.Hour,
									request.Session.StartTime.Minute,
									request.Session.StartTime.Second);

							session.EndDateTime = session.StartDateTime.AddMinutes(sessionDuration.TotalMinutes);

							sessionList.Add(session);
						}
					}
					startingPoint = startingPoint.AddDays(1);
				
					dayCount++;
				}
			}
			else
			{
				AppointmentSessionEntity session = new AppointmentSessionEntity();
				session.Guid = Guid.NewGuid();
				session.LastUpdateDateTime = now;
				session.CreatedDateTime = now;
				session.GroupIdentifier = groupIdentifier;
				session.NursingHomeId = nursingHomeId;
				session.Name = request.Session.Name;
				session.Rate = request.Session.Rate;

				session.StartDateTime =
					new DateTime(
						startingDate.Year,
						startingDate.Month,
						startingDate.Day,
						request.Session.StartTime.Hour,
						request.Session.StartTime.Minute,
						request.Session.StartTime.Second);

				session.EndDateTime = session.StartDateTime.AddMinutes(sessionDuration.TotalMinutes);

				sessionList.Add(session);

			}

			return sessionList;
		}


		private bool IsDateInRecurrence(DateTime currentDay, AppointmentRecurrence recurrence)
		{
			foreach (Day day in recurrence.Days)
			{
				if (day == Day.Monday && currentDay.DayOfWeek == DayOfWeek.Monday)
				{
					return true;
				}
				else if (day == Day.Tuesday && currentDay.DayOfWeek == DayOfWeek.Tuesday)
				{
					return true;
				}
				else if (day == Day.Wednesday && currentDay.DayOfWeek == DayOfWeek.Wednesday)
				{
					return true;
				}
				else if (day == Day.Thursday && currentDay.DayOfWeek == DayOfWeek.Thursday)
				{
					return true;
				}
				else if (day == Day.Friday && currentDay.DayOfWeek == DayOfWeek.Friday)
				{
					return true;
				}
				else if (day == Day.Saturday && currentDay.DayOfWeek == DayOfWeek.Saturday)
				{
					return true;
				}
				else if (day == Day.Sunday && currentDay.DayOfWeek == DayOfWeek.Sunday)
				{
					return true;
				}
			}

			return false;
		}

		private DateTime GetTimePart(DateTime dateTime)
		{
			return new DateTime(
				DateTime.Now.Year,
				DateTime.Now.Month,
				DateTime.Now.Day,
				dateTime.Hour,
				dateTime.Minute,
				dateTime.Second);
		}

	}
}