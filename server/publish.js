Meteor.publish('offers', function(){
    return Offers.find({
    });
    
});
Meteor.publish('users', function(){
    return Users.find({
    });
});
