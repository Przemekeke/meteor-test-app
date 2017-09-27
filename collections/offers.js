import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

Offers = new Meteor.Collection('offers');

Offers.allow({ 
  insert: function(userId, doc) { 
    return !!userId; 
  }, 
  update: function() { 
    return true; 
  }, 
  remove: function() { 
    return true; 
  } 
});


Offers.schema = new SimpleSchema({

  title: {
    label: "Title",
    type: String},
   picture: {
    type: String,
    optional: true,
    autoform:
    {
      afFieldInput:
      {
        type: 'fileUpload',
        collection: 'Images',
        label: 'Choose file' 
      }
    }
  },
  description: 
  { label:"Description",
    type: String}
})

Offers.attachSchema(Offers.schema);
