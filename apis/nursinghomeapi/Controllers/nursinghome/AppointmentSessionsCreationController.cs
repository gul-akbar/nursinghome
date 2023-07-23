using common;
using common.apirequests;
using common.database;
using Dapper.Contrib.Extensions;
using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;

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

					foreach(AppointmentSessionEntity entity in sesionsToCreate)
					{
						connection.Insert(entity);
					}
				}
			}
			catch (Exception ex)
			{
				// TODO
			}
			return response;
		}

		private List<AppointmentSessionEntity> GetSessionsToCreate(CreateSessionRequest request)
		{
			List<AppointmentSessionEntity> sessions = new List<AppointmentSessionEntity>();

			int nursingHome = 2; // TODO: hardcode




			return sessions;
		}

	}
}