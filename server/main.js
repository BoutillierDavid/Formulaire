import { Meteor } from 'meteor/meteor';

Contacts = new Mongo.Collection('contacts');

Meteor.startup(() => {
  // code to run on server at startup
});
