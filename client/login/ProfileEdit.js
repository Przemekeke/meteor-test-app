Meteor.subscribe('users');


FlashMessages.configure({
    autoHide: true,
    hideDelay: 5000,
    autoScroll: true
  });

Template.ProfileEdit.helpers({
	currentUser : function() {
		if (Meteor.user()) { return Meteor.user(); }
	},
});

AutoForm.hooks({
	profileEdit: {
		update: function(doc) {
			console.log('doc: ', doc);
			return doc;
		},
		onSuccess: function(formType, result) {
			console.log(result);
		},
		onError: function(formType, error) {
			console.log(error);			
		},		
	}
});
