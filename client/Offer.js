Template.Offer.onCreated(function() {
    var self = this;
    self.autorun(function() { 
         self.subscribe('offers');
    });
    
})


Template.Offer.helpers({ 
    offer: ()=>{
        var id = FlowRouter.getParam('id');
        console.log(id);
        return Offers.findOne({
            _id: id
        });
    }
}); 
