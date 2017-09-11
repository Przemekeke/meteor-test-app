import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';


Template._loginButtonsLoggedInDropdown.events({
	'click #login-buttons-edit-profile': function(event) {
		Router.go('profileEdit');
	}
});