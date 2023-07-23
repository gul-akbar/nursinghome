using common.databaseentities.common;
using Dapper.Contrib.Extensions;
using System.Data.SqlClient;

namespace nursinghomeapi.Common
{
    public class LogErrorHandler
	{
		public static void LogException(Exception ex)
		{
			LogException(ex, ex.Message);
		}

		public static void LogException(Exception ex, string message)
		{
			ErrorLog errorLog = new ErrorLog();
			errorLog.DateTime = DateTime.Now;
			errorLog.Guid = Guid.NewGuid();
			errorLog.Message = message;
			errorLog.StackTrace = ex.StackTrace;
			errorLog.Area = 0;

			using (SqlConnection connection = new SqlConnection(Constants.DatabaseConnectionString))
			{
				connection.Open();

				connection.Insert(errorLog);
			}
		}
	}
}
