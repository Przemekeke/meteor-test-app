Meteor.subscribe('offers');

Template.FindOffers.helpers({ 
    offers: ()=>{
        return Offers.find({});
    },

    findOffers: function(){
        console.log(document.getElementById("find-offers"));
        return Offers.find({
           title: {$regex : '.*'+ Session.get('currentTitlte') +'.*'}           
        });
        
    }
}); 

Template.FindOffers.events({
    'keyup #find-offers': function(event){
        Session.set('currentTitlte',event.target.value)        
    } 
})