Accounts.onLogin(function() { 
   FlowRouter.go('MyOffers')
}); 
Accounts.onLogout(function() { 
  FlowRouter.go('Login')
}); 


FlowRouter.route('/',{
  name: 'Login',
  action()
  {
    if(Meteor.userId()){
      FlowRouter.go('MyOffers')
    }

    BlazeLayout.render('login'); 
    BlazeLayout.setRoot('body');
  }

});

FlowRouter.route('/my-offers', {
  name: 'MyOffers',
  action()
  {
    BlazeLayout.render('MyOffers'); 
  }
});

FlowRouter.route('/find-offers', {
  name: 'FindOffers',
  action()
  {
    BlazeLayout.render('FindOffers'); 
  }
});

FlowRouter.route('/offer/:id', {
  name: 'Offer',
  action()
  {
    BlazeLayout.render('Offer'); 
  }
});

FlowRouter.route('/profile-edit', {
  name: 'ProfileEdit',
  action()
  {
    BlazeLayout.render('ProfileEdit'); 
  }
});