USE [gwdb]
GO

insert into [dbo].[Contact]
           (
		   [Guid]
           ,[LastUpdateDateTime]
           ,[CreatedDateTime]
           ,[Name]
           ,[Notes])
     values
           (
		   newid(),
		   getdate(), 
		   getdate(), 
		   'Gul Akbar Owner',
		   'none'
		   );

declare @contactId int = Scope_Identity()

insert into [dbo].[NursingHome]
    ([Guid]
    ,[LastUpdateDateTime]
    ,[CreatedDateTime]
    ,[ContactId]
    ,[HouseNumber]
    ,[AddressLine]
    ,[AddressLine2]
    ,[Postcode]
    ,[City]
    ,[Mobile]
    ,[HomePhone]
    ,[EmailAddress]
    ,[DateJoined]
    ,[Notes]
    ,[Username]
    ,[Password]
    ,[Approved]
    ,[Ignore])
values
    (
	newid(),
	getdate(),
	getdate(),
	@contactId,
	'12',
	'Park Road',
	'',
	'BD18 9QQ',
	'Keighley',
	'0795760698',
	'na',
	'gul.akbar@gmail.com',
	getdate(),
	'none',
	'username',
	'password',
	1, 
	0
	)



