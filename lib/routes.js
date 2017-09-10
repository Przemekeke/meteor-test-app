FlowRouter.route('/',{
  name: 'Login',
  action()
  {
    BlazeLayout.render('login'); 
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