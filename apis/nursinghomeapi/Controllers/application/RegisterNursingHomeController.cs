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
	public class RegisterNursingHomeController : BaseController
	{
		[HttpPost(Name = "RegisterNursingHome")]
		public ApplicationResponse Post(RegisterNursingHomeRequest request)
		{
			ApplicationResponse response = new ApplicationResponse();

			if (!Authenticated(request.SessionGuid))
			{
				return response;
			}

			try
			{
				request.NursingHome.DateJoined = DateTime.Now;
				request.NursingHome.Guid = Guid.NewGuid();
				request.NursingHome.LastUpdateDateTime = DateTime.Now;
				request.NursingHome.CreatedDateTime = DateTime.Now;

				request.NursingHome.Password = "test";

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