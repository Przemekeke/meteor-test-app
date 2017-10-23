import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Accounts } from 'meteor/accounts-base';

Template._loginButtonsLoggedInDropdown.events({
	'click #login-buttons-edit-profile'(event) {
		FlowRouter.go('ProfileEdit');
	},

});

Template.register.events({
	'submit form'(event) {
		event.preventDefault();
		const email = $('[name=email]').val();
		const password = $('[name=password]').val();
		const username = $('[name=username]').val();
		Accounts.createUser({
			email,
			password,
			username,
		});
	},
});
