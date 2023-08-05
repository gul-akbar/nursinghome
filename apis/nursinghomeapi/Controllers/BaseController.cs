using common;
using common.databaseentities.common;
using Dapper;
using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;

namespace nursinghomeapi.Controllers
{
    public class BaseController : ControllerBase
    {
		

		protected void LogRequestInformation(Request request)
        {
            //using (SqlConnection connection = new SqlConnection(Constants.DatabaseConnectionString))
            //{
            //    connection.Open();
            //}
        }

        protected bool Authenticated(Guid sessionGuid)
        {
            try
            {
                using (SqlConnection connection = new SqlConnection(Constants.DatabaseConnectionString))
                {
                    connection.Open();

                    SessionEntity sessionEntity =
                        connection.Query(
                        "select * from Session where SessioGuid=@SessioGuid",
                                new
                                {
                                    SessioGuid = sessionGuid
                                })
                            .SingleOrDefault();

                    if (sessionEntity != null)
                    {
                        if (sessionEntity.ExpiryDateTime <= DateTime.Now)
                        {
                            return true;
                        }
                    }
                }

            }
            catch (Exception ex)
            {
				Common.LogErrorHandler.LogException(ex);
            }
            return false;
        }

        //private readonly ILogger<WeatherForecastController> _logger;

        //public WeatherForecastController(ILogger<WeatherForecastController> logger)
        //{
        //	_logger = logger;
        //}


        // TODO: stuff like logging errors / authentication etc.
    }
}
