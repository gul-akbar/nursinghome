using common;
using common.apirequests.nursinghome;
using common.apiresponse.nursinghome;
using common.database;
using Dapper;
using Microsoft.AspNetCore.Mvc;
using nursinghomeapi.Common;
using System.Data.SqlClient;

namespace nursinghomeapi.Controllers
{
    [ApiController]
	[Route("[controller]")]
	public class GetAppointmentSessionsController : BaseController
	{
	
		[HttpPost(Name = "GetAppointmentSessions")]
		public Response Create(GetAppointmentsForDate request)
		{
			GetAppointmentSessionResponse response = new GetAppointmentSessionResponse();

			try
			{
				LogRequestInformation(request);

				using (SqlConnection connection = new SqlConnection(Constants.DatabaseConnectionString))
				{
					connection.Open();

					//NursingHomeSessionEntity nursingHome = // get nursing home from supplied guid

					response.Sessions =
						connection
						.Query<AppointmentSessionEntity>("select * from AppointmentSession where StartDateTime >= @StartSearchDateTime and StartDateTime <= @EndSearchDateTime",
							new
							{
								StartSearchDateTime = request.Date.Date,
								EndSearchDateTime = request.Date.Date.AddDays(1)
							})
						.OrderBy(a => a.StartDateTime)
						.ToList();
				}
				response.Success = true;
			}
			catch (Exception ex)
			{
				LogErrorHandler.LogException(ex, typeof(AppoitnmentSessionCreationController).Name);
			}
			return response;
		}
	}
}