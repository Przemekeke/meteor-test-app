Meteor.subscribe('offers');
Meteor.subscribe('users');
Meteor.subscribe('images');


Template.SingleOffer.helpers({ 
    offers: ()=>{
        return Offers.find({});
    },
    updateRecipeID: function(){
        return this._id;
    },
    showPicture: function(pictureID){
        picture = Images.find({
            _id: pictureID
        });
        return picture;
    }
}); 

Template.SingleOffer.events({ 
    'click .fa-trash': function(event){
        var id = this._id; 
        new Confirmation({
            message: "Are you sure you want to delete this?",
            title: "Confirmation",
            cancelText: "Cancel",
            okText: "Ok",
            success: true, 
            focus: "cancel" 
          }, function (ok) {            
                Offers.remove({_id: id});        
        });
    }    
}); 
