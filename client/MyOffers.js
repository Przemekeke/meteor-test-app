Meteor.subscribe('offers');

Template.MyOffers.helpers({ 
    offers: ()=>{
        return Offers.find({});
    }
}); 

