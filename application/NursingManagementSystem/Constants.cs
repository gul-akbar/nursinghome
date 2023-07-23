namespace NursingManagementSystem
{
	public class Constants
	{
		public string ApiUrl = "https://nursinghomeapi.ga-system.co.uk";
		
		private string LocalApiUrl = "https://localhost:7101";


		private static Constants _instance = null;

		private Constants() { }

		public static Constants Instance
		{
			get
			{
				if (_instance == null)
				{
					_instance = new Constants();
				}
				return _instance;
			}
		}

		public void UseLocal()
		{
			ApiUrl = LocalApiUrl;
		}
	}
}
