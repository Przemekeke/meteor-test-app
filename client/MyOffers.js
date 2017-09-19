Meteor.subscribe('offers');
Meteor.subscribe('users');

Template.MyOffers.helpers({ 
    offers: ()=>{
        return Offers.find({});
    },
    updateRecipeID: function(){
        return this._id;
    }
}); 

Template.MyOffers.events({ 
    'click .fa-trash': function(){
        Offers.remove({_id: this._id});
        
    }
}); 
