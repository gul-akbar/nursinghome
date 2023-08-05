namespace common.api
{
	public class LoginRequest : Request
	{
		public Guid ApplicationGuid { get; set; }
		public string Username { get; set; } = string.Empty;
		public string Password { get; set; } = string.Empty;
		public short Type { get; set; }
	}
}
