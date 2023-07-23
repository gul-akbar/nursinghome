namespace NursingManagementSystem
{
	partial class Main
	{
		/// <summary>
		///  Required designer variable.
		/// </summary>
		private System.ComponentModel.IContainer components = null;

		/// <summary>
		///  Clean up any resources being used.
		/// </summary>
		/// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
		protected override void Dispose(bool disposing)
		{
			if (disposing && (components != null))
			{
				components.Dispose();
			}
			base.Dispose(disposing);
		}

		#region Windows Form Designer generated code

		/// <summary>
		///  Required method for Designer support - do not modify
		///  the contents of this method with the code editor.
		/// </summary>
		private void InitializeComponent()
		{
			this.menuStrip = new System.Windows.Forms.MenuStrip();
			this.fileToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
			this.exitToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
			this.mainPanel = new System.Windows.Forms.Panel();
			this.nursingHomesToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
			this.carersToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
			this.vIewCarersToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
			this.approveCarerToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
			this.viewNursingHomesToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
			this.registerNewNursingHomeToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
			this.addCarerToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
			this.topPanel = new System.Windows.Forms.Panel();
			this.containingPanel = new System.Windows.Forms.Panel();
			this.label1 = new System.Windows.Forms.Label();
			this.menuStrip.SuspendLayout();
			this.mainPanel.SuspendLayout();
			this.topPanel.SuspendLayout();
			this.SuspendLayout();
			// 
			// menuStrip
			// 
			this.menuStrip.Items.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.fileToolStripMenuItem,
            this.nursingHomesToolStripMenuItem,
            this.carersToolStripMenuItem});
			this.menuStrip.Location = new System.Drawing.Point(0, 0);
			this.menuStrip.Name = "menuStrip";
			this.menuStrip.Size = new System.Drawing.Size(1358, 24);
			this.menuStrip.TabIndex = 0;
			this.menuStrip.Text = "menuStrip1";
			// 
			// fileToolStripMenuItem
			// 
			this.fileToolStripMenuItem.DropDownItems.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.exitToolStripMenuItem});
			this.fileToolStripMenuItem.Name = "fileToolStripMenuItem";
			this.fileToolStripMenuItem.Size = new System.Drawing.Size(37, 20);
			this.fileToolStripMenuItem.Text = "File";
			// 
			// exitToolStripMenuItem
			// 
			this.exitToolStripMenuItem.Name = "exitToolStripMenuItem";
			this.exitToolStripMenuItem.Size = new System.Drawing.Size(180, 22);
			this.exitToolStripMenuItem.Text = "Exit";
			this.exitToolStripMenuItem.Click += new System.EventHandler(this.exitToolStripMenuItem_Click);
			// 
			// mainPanel
			// 
			this.mainPanel.Controls.Add(this.containingPanel);
			this.mainPanel.Controls.Add(this.topPanel);
			this.mainPanel.Dock = System.Windows.Forms.DockStyle.Fill;
			this.mainPanel.Location = new System.Drawing.Point(0, 24);
			this.mainPanel.Name = "mainPanel";
			this.mainPanel.Size = new System.Drawing.Size(1358, 798);
			this.mainPanel.TabIndex = 1;
			// 
			// nursingHomesToolStripMenuItem
			// 
			this.nursingHomesToolStripMenuItem.DropDownItems.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.viewNursingHomesToolStripMenuItem,
            this.registerNewNursingHomeToolStripMenuItem});
			this.nursingHomesToolStripMenuItem.Name = "nursingHomesToolStripMenuItem";
			this.nursingHomesToolStripMenuItem.Size = new System.Drawing.Size(102, 20);
			this.nursingHomesToolStripMenuItem.Text = "Nursing Homes";
			// 
			// carersToolStripMenuItem
			// 
			this.carersToolStripMenuItem.DropDownItems.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.vIewCarersToolStripMenuItem,
            this.approveCarerToolStripMenuItem,
            this.addCarerToolStripMenuItem});
			this.carersToolStripMenuItem.Name = "carersToolStripMenuItem";
			this.carersToolStripMenuItem.Size = new System.Drawing.Size(52, 20);
			this.carersToolStripMenuItem.Text = "Carers";
			// 
			// vIewCarersToolStripMenuItem
			// 
			this.vIewCarersToolStripMenuItem.Name = "vIewCarersToolStripMenuItem";
			this.vIewCarersToolStripMenuItem.Size = new System.Drawing.Size(180, 22);
			this.vIewCarersToolStripMenuItem.Text = "VIew Carers";
			this.vIewCarersToolStripMenuItem.Click += new System.EventHandler(this.vIewCarersToolStripMenuItem_Click);
			// 
			// approveCarerToolStripMenuItem
			// 
			this.approveCarerToolStripMenuItem.Name = "approveCarerToolStripMenuItem";
			this.approveCarerToolStripMenuItem.Size = new System.Drawing.Size(180, 22);
			this.approveCarerToolStripMenuItem.Text = "Approve Carer";
			this.approveCarerToolStripMenuItem.Click += new System.EventHandler(this.approveCarerToolStripMenuItem_Click);
			// 
			// viewNursingHomesToolStripMenuItem
			// 
			this.viewNursingHomesToolStripMenuItem.Name = "viewNursingHomesToolStripMenuItem";
			this.viewNursingHomesToolStripMenuItem.Size = new System.Drawing.Size(222, 22);
			this.viewNursingHomesToolStripMenuItem.Text = "View Nursing Homes";
			this.viewNursingHomesToolStripMenuItem.Click += new System.EventHandler(this.viewNursingHomesToolStripMenuItem_Click);
			// 
			// registerNewNursingHomeToolStripMenuItem
			// 
			this.registerNewNursingHomeToolStripMenuItem.Name = "registerNewNursingHomeToolStripMenuItem";
			this.registerNewNursingHomeToolStripMenuItem.Size = new System.Drawing.Size(222, 22);
			this.registerNewNursingHomeToolStripMenuItem.Text = "Register new Nursing Home";
			this.registerNewNursingHomeToolStripMenuItem.Click += new System.EventHandler(this.registerNewNursingHomeToolStripMenuItem_Click);
			// 
			// addCarerToolStripMenuItem
			// 
			this.addCarerToolStripMenuItem.Name = "addCarerToolStripMenuItem";
			this.addCarerToolStripMenuItem.Size = new System.Drawing.Size(180, 22);
			this.addCarerToolStripMenuItem.Text = "Add Carer";
			this.addCarerToolStripMenuItem.Click += new System.EventHandler(this.addCarerToolStripMenuItem_Click);
			// 
			// topPanel
			// 
			this.topPanel.Controls.Add(this.label1);
			this.topPanel.Dock = System.Windows.Forms.DockStyle.Top;
			this.topPanel.Location = new System.Drawing.Point(0, 0);
			this.topPanel.Name = "topPanel";
			this.topPanel.Size = new System.Drawing.Size(1358, 60);
			this.topPanel.TabIndex = 0;
			// 
			// containingPanel
			// 
			this.containingPanel.Dock = System.Windows.Forms.DockStyle.Fill;
			this.containingPanel.Location = new System.Drawing.Point(0, 60);
			this.containingPanel.Name = "containingPanel";
			this.containingPanel.Size = new System.Drawing.Size(1358, 738);
			this.containingPanel.TabIndex = 1;
			// 
			// label1
			// 
			this.label1.AutoSize = true;
			this.label1.Font = new System.Drawing.Font("Garamond", 14.25F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point);
			this.label1.Location = new System.Drawing.Point(1037, 18);
			this.label1.Name = "label1";
			this.label1.Size = new System.Drawing.Size(309, 21);
			this.label1.TabIndex = 0;
			this.label1.Text = "Nursing Home Management System";
			// 
			// Main
			// 
			this.AutoScaleDimensions = new System.Drawing.SizeF(7F, 15F);
			this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
			this.ClientSize = new System.Drawing.Size(1358, 822);
			this.Controls.Add(this.mainPanel);
			this.Controls.Add(this.menuStrip);
			this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.FixedDialog;
			this.MainMenuStrip = this.menuStrip;
			this.Name = "Main";
			this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
			this.Text = "Nursing Management System";
			this.menuStrip.ResumeLayout(false);
			this.menuStrip.PerformLayout();
			this.mainPanel.ResumeLayout(false);
			this.topPanel.ResumeLayout(false);
			this.topPanel.PerformLayout();
			this.ResumeLayout(false);
			this.PerformLayout();

		}

		#endregion

		private MenuStrip menuStrip;
		private ToolStripMenuItem fileToolStripMenuItem;
		private ToolStripMenuItem exitToolStripMenuItem;
		private ToolStripMenuItem nursingHomesToolStripMenuItem;
		private ToolStripMenuItem viewNursingHomesToolStripMenuItem;
		private ToolStripMenuItem registerNewNursingHomeToolStripMenuItem;
		private ToolStripMenuItem carersToolStripMenuItem;
		private ToolStripMenuItem vIewCarersToolStripMenuItem;
		private ToolStripMenuItem approveCarerToolStripMenuItem;
		private Panel mainPanel;
		private ToolStripMenuItem addCarerToolStripMenuItem;
		private Panel containingPanel;
		private Panel topPanel;
		private Label label1;
	}
}