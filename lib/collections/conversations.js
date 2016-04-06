import {Mongo} from 'meteor/mongo';


const Conversations = new Mongo.Collection('conversations');


Conversations.attachSchema(new SimpleSchema({
  from: {
    type: String,
    optional:true,
    autoValue: function() {
      if (this.userId) {
        return this.userId;
      }
    },
    regEx: SimpleSchema.RegEx.Id
  },
  to: {
    type: String,
    optional:true,
    regEx: SimpleSchema.RegEx.Id
  },
  createdAt: {
    type: Date,
    label: "Published On",
    optional: true,
    denyUpdate: true,
    autoValue: function() {
      if (this.isInsert) {
        return new Date;
      } else if (this.isUpsert) {
        return {$setOnInsert: new Moment()};
      } else {
        this.unset();
      }
    }
  }
}));

export default Conversations;
