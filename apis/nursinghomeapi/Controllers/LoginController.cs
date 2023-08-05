using common.api;
using common.databaseentities;
using common.databaseentities.common;
using Dapper;
using Microsoft.AspNetCore.Mvc;
using nursinghomeapi.Common;
using System.Data.SqlClient;

namespace nursinghomeapi.Controllers
{
	public class LoginController : BaseController
	{
		private static Guid ApplicationGuid = new Guid("A9E9034E-428B-4934-9B02-8AE3BEEC0FCD");

		private const int MaxTimeout = 8; // hours

		[HttpPost(Name = "Login")]
		public LoginResponse Login(LoginRequest request)
		{
			LogRequestInformation(request);

			LoginResponse response = new LoginResponse();

			if (request != null && request.ApplicationGuid != ApplicationGuid)
			{
				return response;
			}

			try
			{
				using (SqlConnection connection = new SqlConnection(Constants.DatabaseConnectionString))
				{
					connection.Open();

					NursingHomeEntity nursingHomeEntity =
						connection
						.Query<NursingHomeEntity>("select * from NursingHome where Username=@Username",
							new
							{
								Username = request.Username
							})
						.SingleOrDefault();


					if (nursingHomeEntity != null && !string.IsNullOrEmpty(nursingHomeEntity.Password))
					{
						if (nursingHomeEntity.Password.Equals(request.Password, StringComparison.Ordinal))
						{
							SessionEntity sessionEntity = new SessionEntity();
							sessionEntity.SessionGuid = Guid.NewGuid();
							sessionEntity.CreatedDateTime = DateTime.Now;
							sessionEntity.ExpiryDateTime = DateTime.Now.AddHours(MaxTimeout);

							response.SessionGuid = sessionEntity.SessionGuid;
							response.Success = true;
						}
					}
				}
			}
			catch (Exception ex)
			{
				LogErrorHandler.LogException(ex);
			}
			
			return response;
		}
	}
}
