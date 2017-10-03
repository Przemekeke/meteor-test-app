Meteor.subscribe('offers');

Template.FindOffers.helpers({ 
    offers: ()=>{
        return Offers.find({});
    },

    findOffers: function(){
        console.log(document.getElementById("find-offers"));
        if()
        return Offers.find({
           $or:[
           {title: {$regex : '.*'+ Session.get('currentTitlteOrDescription') +'.*'}},
           {description: {$regex : '.*'+ Session.get('currentTitlteOrDescription') +'.*'}}               
           ]       
        });
        
    }
}); 

Template.FindOffers.events({
    'keyup #find-offers': function(event){

        Session.set('currentTitlteOrDescription',event.target.value)        
    } 
})