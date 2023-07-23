using common.apirequests.nursinghome;
using common.databaseentities;

namespace NursingManagementSystem.Panels
{
	public partial class AddEditNursingHomeForm : Form
	{
		public AddEditNursingHomeForm()
		{
			InitializeComponent();
		}


		private void button2_Click(object sender, EventArgs e)
		{
			DialogResult = DialogResult.Cancel;
		}

		private bool ValidateForm()
		{
			if (textBoxName.Text.Trim().Length == 0 )
			{
				return false;
			}
			if (textBoxAddressLine1.Text.Trim().Length == 0)
			{
				return false;
			}
			if (textBoxPostcode.Text.Trim().Length == 0)
			{
				return false;
			}
			if (textBoxCity.Text.Trim().Length == 0)
			{
				return false;
			}
			if (textBoxMobile.Text.Trim().Length == 0)
			{
				return false;
			}
			if (textBoxHome.Text.Trim().Length == 0)
			{
				return false;
			}
			if (textBoxUsername.Text.Trim().Length == 0)
			{
				return false;
			}
			if (textBoxPassword.Text.Trim().Length == 0)
			{
				return false;
			}

			return true;
		}


		private void buttonOK_Click(object sender, EventArgs e)
		{
			if (!ValidateForm())
			{
				MessageBox.Show("Please complete all the required information", "Validation", MessageBoxButtons.OK, MessageBoxIcon.Hand);
				return;
			}

			NursingHomeEntity entity = new NursingHomeEntity();
			entity.AddressLine1 = textBoxAddressLine1.Text.Trim();
			entity.AddressLine2 = textBoxAddressLine2.Text.Trim();
			entity.Mobile = textBoxMobile.Text.Trim();
			entity.City = textBoxCity.Text.Trim();
			entity.Postcode = textBoxPostcode.Text.Trim();
			entity.EmailAddress = textBoxEmail.Text.Trim();
			entity.Approved = checkBoxApproved.Checked;
			entity.ContactName = textBoxName.Text.Trim();
			entity.HomePhone = textBoxHome.Text.Trim();
			entity.Mobile = textBoxMobile.Text.Trim();

			//entity.Notes
			
			ApiCalls.RegisterNursingHome(new RegisterNursingHomeRequest()
			{
				NursingHome = entity
			});

			DialogResult = DialogResult.OK;
		}
	}
}
