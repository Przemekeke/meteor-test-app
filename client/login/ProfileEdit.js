Meteor.subscribe('users');

Template.ProfileEdit.helpers({
    currentUser: function () {
        console.log(Meteor.user());
        
        if(Meteor.user())
             return Meteor.user()
    }
});