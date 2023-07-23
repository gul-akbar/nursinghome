using Dapper.Contrib.Extensions;

namespace common.databaseentities
{

	[Table("NursingHome")]
	public class NursingHomeEntity : BaseEntity
	{
		[Key]
		public int NursingHomeId { get; set; }

		public string ContactName { get; set; } = string.Empty;
		public string HouseNumber { get; set; } = string.Empty;
		public string AddressLine1 { get; set; } = string.Empty;
		public string AddressLine2 { get; set; } = string.Empty;
		public string Postcode { get; set; } = string.Empty;
		public string City { get; set; } = string.Empty;
		public string Mobile { get; set; } = string.Empty;
		public string HomePhone { get; set; } = string.Empty;
		public string EmailAddress { get; set; } = string.Empty;
		public DateTime DateJoined { get; set; }

		public string Notes { get; set; } = string.Empty;

		public string UserName { get; set; } = string.Empty;
		public string Password { get; set; } = string.Empty;

		public bool Approved { get; set; }
		public bool Ignore { get; set; }
	}
}
