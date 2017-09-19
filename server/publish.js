Meteor.publish('offers', function(){
    return Offers.find({
    });
    
});
Meteor.publish('users', function(){
        return Meteor.users.find({ _id: this.userId });
});
