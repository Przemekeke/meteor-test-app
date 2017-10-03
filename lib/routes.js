Accounts.onLogin(function() {
  FlowRouter.go('MyOffers')
});
Accounts.onLogout(function() {
 FlowRouter.go('Login')
});

FlowRouter.route('/',{
  name: 'Main',
  action()
  {
    if(Meteor.userId()){
      FlowRouter.go('MyOffers')
    }
    BlazeLayout.render('MainPage'); 
    BlazeLayout.setRoot('body');
  }
 });

FlowRouter.route('/login',{
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
 waitOn: function () {
   Meteor.subscribe('images');
},
 action()
 {
  if(!Meteor.userId()){
    FlowRouter.go('Main')
  }
   BlazeLayout.render('MyOffers');
   BlazeLayout.setRoot('body');
 }
});

FlowRouter.route('/find-offers', {
 name: 'FindOffers',
 action()
 {
  if(!Meteor.userId()){
    FlowRouter.go('Main')
  }
   BlazeLayout.render('FindOffers');
 }
});

FlowRouter.route('/offer/:id', {
 name: 'Offer',
 action()
 {
  if(!Meteor.userId()){
    FlowRouter.go('Main')
  }
   BlazeLayout.render('Offer');
 }
});

FlowRouter.route('/profile-edit', {
 name: 'ProfileEdit',
 action()
 {
  if(!Meteor.userId()){
    FlowRouter.go('Main')
  }
   BlazeLayout.render('ProfileEdit');
 }
});
