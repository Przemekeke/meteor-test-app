import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const Offers = new Mongo.Collection('offers');

Offers.schema = new SimpleSchema({

  title: {type: String},
  pictutreFile: {type: String},
  description: {type: String}
})

Offers.attachSchema(Offers.schema);
