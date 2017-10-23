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
      console.log(username);
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
      var email = $('#at-field-username_and_email').val();
      var password = $('#at-field-password').val();
      Meteor.loginWithPassword(email, password, function(error) {
        console.log(error.reason);
      });
    }
  },
});

