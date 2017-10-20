import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Accounts } from 'meteor/accounts-base'

Template._loginButtonsLoggedInDropdown.events({
	'click #login-buttons-edit-profile': function(event) {
		FlowRouter.go('ProfileEdit');
    },

});

Template.register.events({
    'submit form': function(event){
        event.preventDefault();
        var email = $('[name=email]').val();
		var password = $('[name=password]').val();
		var username = $('[name=username]').val();		
        Accounts.createUser({
            email: email,
			password: password,
			username: username		
        });
    }
});
