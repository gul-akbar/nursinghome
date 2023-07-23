using NursingManagementSystem.Panels;

namespace NursingManagementSystem
{
	public partial class Main : Form
	{
		public Main()
		{
			InitializeComponent();
		}

		private void exitToolStripMenuItem_Click(object sender, EventArgs e)
		{
			Application.Exit();
		}

		private void registerNewNursingHomeToolStripMenuItem_Click(object sender, EventArgs e)
		{
			using (AddEditNursingHomeForm form = new AddEditNursingHomeForm())
			{
				form.ShowDialog();
			}
		}

		private void viewNursingHomesToolStripMenuItem_Click(object sender, EventArgs e)
		{

		}

		private void vIewCarersToolStripMenuItem_Click(object sender, EventArgs e)
		{

		}

		private void approveCarerToolStripMenuItem_Click(object sender, EventArgs e)
		{

		}

		private void addCarerToolStripMenuItem_Click(object sender, EventArgs e)
		{

		}

		private void linkLabelUseLocalAPI_LinkClicked(object sender, LinkLabelLinkClickedEventArgs e)
		{
			Constants.Instance.UseLocal();
		}
	}
}