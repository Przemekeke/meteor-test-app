Meteor.subscribe('users');

Template.ProfileEdit.helpers({
    currentUser: function () {      
        if(Meteor.user())
             return Meteor.user()
    }
});

Template.ProfileEdit.events({ 
 //   'click .btn-primary': function(event) { 
  //       FlowRouter.go('MyOffers');         
  //  } 
});

AutoForm.hooks({
    profileEdit: {
        onSuccess: function(doc) {
            console.log("Dziala");
            FlowRouter.go('MyOffers');         
        }
    }
});