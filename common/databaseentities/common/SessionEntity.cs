using Dapper.Contrib.Extensions;

namespace common.databaseentities.common
{
	[Table("Session")]
	public class SessionEntity
	{
		[Key]
		public int SessionId { get; set; }
		public Guid SessionGuid { get; set; }
		public DateTime CreatedDateTime { get; set; }
		public DateTime ExpiryDateTime { get; set; }
	}
}
