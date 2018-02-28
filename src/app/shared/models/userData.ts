export class UserMaster{

    constructor(){}

    userId : Number;
	userName : String;
	userFirstName : String;
	userLastName : String;
	currentPassword : String;
	previousPassword : String;
	email1 : String;
	email2 : String;
	mobile1 : String;
	mobile2 : String;

	operationDate : String;
	opBrachId : Number;
	opDeptId : Number;
	fkEntityId : Number;
	address : String;
	userPhoto : Blob;
	
	passChangeDate : Date;
	lastLoginDate : Date;
	lastLogoutDate : Date;
	createDate : Date;
	fkDeptId : Number;
	employeeFlag : String;
	fkEmpId : Number;
	userStatusDesc;
	
	operationId : Number;
	enterUserId : Number;
	activeFlag : String;
	deleteFlag : String;
}