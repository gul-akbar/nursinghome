using common;
using Newtonsoft.Json;
using System.Net.Http.Headers;

namespace NursingManagementSystem
{
	public class ApiCentral
	{
		private const string _applicationContext = "application/json";

		public static T Call<T>(string api, ApplicationRequest request)
		{
			using (var client = new HttpClient())
			{
				client.BaseAddress = new Uri(Constants.Instance.ApiUrl);
				client.DefaultRequestHeaders.Accept.Clear();
				client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue(_applicationContext));

				//request.SystemOrganisationGuid = Constants.SystemOrganisationGuid;

				string jsonRequest = JsonConvert.SerializeObject(request);
				StringContent httpContent = new StringContent(jsonRequest, System.Text.Encoding.UTF8, _applicationContext);

				var response = client.PostAsync(api, httpContent).Result;

				if (response.IsSuccessStatusCode)
				{
					var jsonResponse = response.Content.ReadAsStringAsync();

					if (!string.IsNullOrEmpty(jsonResponse.Result))
					{
						return JsonConvert.DeserializeObject<T>(jsonResponse.Result);
					}
				}
				return default(T);
			}
		}

	}
}
