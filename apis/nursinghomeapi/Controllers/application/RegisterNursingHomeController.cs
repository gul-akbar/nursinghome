using common;
using common.apirequests.nursinghome;
using Dapper.Contrib.Extensions;
using Microsoft.AspNetCore.Mvc;
using nursinghomeapi.Common;
using System.Data.SqlClient;

namespace nursinghomeapi.Controllers
{
	[ApiController]
	[Route("[controller]")]
	public class RegisterNursingHomeController : Controller
	{

		[HttpPost(Name = "RegisterNursingHome")]
		public Response Post(RegisterNursingHomeRequest request)
		{
			Response response = new Response();

			// do some authentication checks

			try
			{
				request.NursingHome.DateJoined = DateTime.Now;
				request.NursingHome.Guid = Guid.NewGuid();
				request.NursingHome.LastUpdateDateTime = DateTime.Now;

				using (SqlConnection connection = new SqlConnection(Constants.DatabaseConnectionString))
				{
					connection.Open();
					connection.Insert(request.NursingHome);
				}

				response.Success = true;
			}
			catch(Exception ex)
			{
				LogErrorHandler.LogException(ex, typeof(RegisterNursingHomeController).Name);
			}
			return response;
		}
	}
}