
namespace NursingManagementSystem.Panels
{
	public partial class ViewNursingHomePage : UserControl
	{
		public ViewNursingHomePage()
		{
			InitializeComponent();
		}

		private void linkLabelAddNursingHome_LinkClicked(object sender, LinkLabelLinkClickedEventArgs e)
		{
			using (AddEditNursingHomeForm form = new AddEditNursingHomeForm())
			{
				form.ShowDialog();
			}
		}
	}
}
