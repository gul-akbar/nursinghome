using common.databaseentities.common;
using Dapper.Contrib.Extensions;
using System.Data.SqlClient;

namespace nursinghomeapi.Common
{
    public class LogErrorHandler
	{
		public static void LogException(Exception ex, string source)
		{
			LogException(ex, source, ex.Message);
		}

		public static void LogException(Exception ex, string source, string message)
		{
			ErrorLog errorLog = new ErrorLog();
			errorLog.DateTime = DateTime.Now;
			errorLog.Guid = Guid.NewGuid();
			errorLog.Message = message;
			errorLog.StackTrace = ex.StackTrace;
			errorLog.Source = source;

			using (SqlConnection connection = new SqlConnection(Constants.DatabaseConnectionString))
			{
				connection.Open();

				connection.Insert(errorLog);
			}
		}
	}
}
