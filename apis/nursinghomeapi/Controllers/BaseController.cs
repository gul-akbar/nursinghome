using common;
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

        //private readonly ILogger<WeatherForecastController> _logger;

        //public WeatherForecastController(ILogger<WeatherForecastController> logger)
        //{
        //	_logger = logger;
        //}


        // TODO: stuff like logging errors / authentication etc.
    }
}
