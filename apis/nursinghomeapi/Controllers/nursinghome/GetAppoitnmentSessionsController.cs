using common;
using common.apiresponse;
using common.database;
using Dapper;
using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;

namespace nursinghomeapi.Controllers
{
	[ApiController]
	[Route("[controller]")]
	public class GetAppoitnmentSessionsController : BaseController
	{
	
		[HttpPost(Name = "GetAppoitnmentSessions")]
		public Response Create(Request request)
		{
			GetAppointmentSessionResponse response = new GetAppointmentSessionResponse();

			try
			{
				using (SqlConnection connection = new SqlConnection(Constants.DatabaseConnectionString))
				{
					connection.Open();

					//NursingHomeSessionEntity nursingHome = // get nursing home from supplied guid

					response.Sessions =
						connection
						.Query<AppointmentSessionEntity>("select * from AppointmentSession")
						.OrderBy(a => a.StartDateTime)
						.ToList();
				}
				response.Success = true;
			}
			catch (Exception ex)
			{
				// TODO
			}
			return response;
		}
	}
}