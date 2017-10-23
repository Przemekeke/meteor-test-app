Meteor.subscribe('users');

Template.ProfileEdit.helpers({
	currentUser () {
		if (Meteor.user()) { return Meteor.user(); }
	},
});

AutoForm.hooks({
	profileEdit: {
		onSuccess(doc) {
			FlowRouter.go('MyOffers');
		},
	},
});
