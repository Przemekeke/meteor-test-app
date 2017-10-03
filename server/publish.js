Meteor.publish('offers', function(){
    return Offers.find({
    });
    
});
Meteor.publish('users', function(){
        return Meteor.users.find({ _id: this.userId });
});
<<<<<<< HEAD
Meteor.publish('images', function(){
    return Images.find({});
});
=======

Meteor.publish('images', function(){
    return Images.find({});
});
>>>>>>> c5bc2a347e040285c551948044be82f97b74b356
