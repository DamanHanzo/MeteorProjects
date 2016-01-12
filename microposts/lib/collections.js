//Profile Images Collection
ProfileImages = new FS.Collection("ProfileImages", {
	stores: [new FS.Store.GridFS("ProfileImages")]
});

UserImages = new Mongo.Collection("UserImages");

Posts = new Mongo.Collection("posts");

Posts.attachSchema(new SimpleSchema({
	body: {
		type: String,
		max: 500
	},
	userId: {
		type: String,
		autoValue: function(){
			return Meteor.userId()
		}
	},
	username: {
		type: String,
		autoValue: function(){
			return Meteor.users.findOne({_id: this.userId}).username}
	},
	createdAt: {
		type: String,
		autoValue: function(){
				
			var monthNames = [
			  "January", "February", "March",
			  "April", "May", "June", "July",
			  "August", "September", "October",
			  "November", "December"
			];

			var date = new Date();
			var day = date.getDate();
			var monthIndex = date.getMonth();
			var year = date.getFullYear();
			var retuner = day + ' ' + monthNames[monthIndex] + ' ' + year;

			return retuner;

		}
	}
}));