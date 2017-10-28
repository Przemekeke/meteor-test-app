import { Accounts } from 'meteor/accounts-base';

AccountsTemplates.addFields([
  {
    _id: 'username',
    type: 'text',
    displayName: 'Username',
    required: true,
  },
]);

Template.overideatForm.replaces('atForm');

Template.overideatForm.helpers(AccountsTemplates.atFormHelpers);

Template.overideatForm.events({
  'click .at-btn'(event) {
    if ($('#at-field-username').val() != null) {
      var email = $('#at-field-email').val();
      var password = $('#at-field-password').val();
      const username = $('#at-field-username').val();
      Accounts.createUser(
        {
          email,
          password,
          username,
        },
        function(err) {
          if (err) {
            console.log(err);
          } else {
            console.log('err');
          }
        },
      );
      console.log('done');
      console.log(($('#at-field-username')).val());
    } else {
      var emailOrUsername = $('#at-field-username_and_email').val();
      var password = $('#at-field-password').val();
      var user = Meteor.users.findOne({
        'profile.username' : emailOrUsername
      });
      if (user != null) {
        Meteor.loginWithPassword(user.emails[0].address, password, function(error) {
          console.log(error.reason);
        });        
      }
      else {
        Meteor.loginWithPassword(emailOrUsername, password, function(error) {
          console.log(error.reason);
        });
      }
    }
  },
});

