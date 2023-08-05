USE [gwdb]
GO

insert into [dbo].[NursingHome]
    ([Guid]
    ,[LastUpdateDateTime]
    ,[CreatedDateTime]
    ,[ContactName]
    ,[HouseNumber]
    ,[AddressLine1]
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
    ,[Ignore]
	,[DisplayName])
values
    (
	newid(),
	getdate(),
	getdate(),
	'Gul Akbar',
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
	0,
	'Barkerend Nursing Home')



