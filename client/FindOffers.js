Meteor.subscribe('offers');

Template.MyOffers.helpers({ 
    offers: ()=>{
        return Offers.find({});
    },

    findOffer: ()=>{
        return Offers.findOne({
           'Title': {$regex : ".*s.*"}           
        });
        
    }
}); 