Meteor.startup(function () {

	AccountsEntry.config({ wrapLinks: true,
		homeRoute: '/',
		dashboardRoute: '/',
		waitEmailVerification: false,
		passwordSignupFields: 'USERNAME_AND_EMAIL'

	});

	Accounts.ui.config({
		passwordSignupFields: 'USERNAME_AND_EMAIL'
	});

});

Template.registerHelper('getProfileImg', function(userId){
	var imgURL = UserImages.findOne({userId: userId}).image;
	return imgURL;
});