
------------------------------------------------------------------------------------------
-------------			System Stuff		
------------------------------------------------------------------------------------------

create table dbo.ErrorLog (

	ErrorLogId int identity (1, 1) not null,
	Guid uniqueidentifier not null default(newid()),
	DateTime datetime not null,
	Message varchar(max) not null, 
	StackTrace varchar(max) null, 
	Area smallint not null default(0), -- 0: API, 1: Application

	constraint UQ_ErroLog_Guid unique (Guid),

	primary key clustered 
	(
		ErrorLogId ASC
	)
) ON [primary] 
Go


create table dbo.[Session] (

	SessionId bigint IDENTITY(1,1) not null,
	SessionGuid uniqueidentifier not null,
	CreatedDateTime datetime not null default (getdate()),
	ExpiryDateTime datetime not null,

	primary key clustered 
	(
		[SessionId] ASC
	)
)
GO

------------------------------------------------------------------------------------------
--			Domain specific
------------------------------------------------------------------------------------------


create table dbo.Carer (

	CarerId int identity (1,1) not null,
	Guid uniqueidentifier not null,
	LastUpdateDateTime datetime not null,
	CreatedDateTime datetime not null default (getdate()),

	Name varchar(100) not null,
	Address varchar(100) not null,
	Postcode varchar(50) not null,

	DBSConfirmed bit not null default (0),
	Approved bit not null default (0),
	Ignore bit not null default(0),

	Notes varchar(max) null,

	primary key clustered 
	(
		CarerId ASC
	)
)


create table dbo.NursingHome (

	NursingHomeId int identity (1,1) not null,
	Guid uniqueidentifier not null,
	LastUpdateDateTime datetime not null,
	CreatedDateTime datetime not null default (getdate()),

	DisplayName varchar(200) not null,
	ContactName varchar(100) not null,
	HouseNumber varchar(10) not null,
	AddressLine1 varchar(100) not null,
	AddressLine2 varchar(100) null,
	Postcode varchar(20) not null,
	City varchar(50) not null,
	Mobile varchar(20) not null,
	HomePhone varchar(60) not null,
	EmailAddress varchar(100) null,
	DateJoined datetime not null,
	Notes varchar(max) null,

	Username varchar(50) not null,
	Password varchar(20) not null,
	
	Approved bit not null default (0),
	Ignore bit not null default (0),

	primary key clustered 
	(
		NursingHomeId ASC
	)
)
Go

create table dbo.AppointmentSessionTemplate (

	AppointmentSessionTemplateId int identity (1,1) not null,
	Guid uniqueidentifier not null,
	LastUpdateDateTime datetime not null,
	CreatedDateTime datetime not null default (getdate()),

	NursingHomeId int not null,

	Template varchar(max) not null,

	primary key clustered 
	(
		AppointmentSessionTemplateId ASC
	)
);

alter table dbo.AppointmentSessionTemplate
	add constraint FK_AppointmentSessionTemplate_NursingHomeId_NursingHome_NursingHomeId
	foreign key (NursingHomeId) 
	references dbo.NursingHome (NursingHomeId);
Go



create table dbo.AppointmentSession (

	AppointmentSessionId int identity (1,1) not null,
	Guid uniqueidentifier not null,
	LastUpdateDateTime datetime not null,
	CreatedDateTime datetime not null default (getdate()),

	GroupIdentifier uniqueidentifier null,

	NursingHomeId int not null,

	CarerId int null,
	Name varchar(100) not null,
	Status smallint not null default(0),  
	StartDateTime datetime not null,
	EndDateTime datetime not null,

	Rate decimal not null,

	Notes varchar(max) null,
	
	primary key clustered 
	(
		AppointmentSessionId ASC
	)
);

/*
	Status on AppointmentSession
	0: Available,
	1: ProvisionallyBooked
	2: AwaitingApproval ?
	3: Booked
*/

alter table dbo.AppointmentSession
	add constraint FK_AppointmentSession_NursingHomeId_NursingHome_NursingHomeId
	foreign key (NursingHomeId) 
	references dbo.NursingHome (NursingHomeId);
Go

