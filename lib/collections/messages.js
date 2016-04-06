import {Mongo} from 'meteor/mongo';


const Messages = new Mongo.Collection( 'messages' );

Messages.attachSchema( new SimpleSchema( {
  title: {
    type: String,
    label: "Subject",
    max: 200,
    optional: true
  },
  to: {
    type: String,
    optional: false,
    label: "User To:",
    regEx: SimpleSchema.RegEx.Id
  },
  conversationId: {
    type: String,
    optional: true,
    regEx: SimpleSchema.RegEx.Id
  },
  createdAt: {
    type: Date,
    label: "Published On",
    optional: true,
    denyUpdate: true,
    autoValue: function () {
      if ( this.isInsert ) {
        return new Date;
      } else if ( this.isUpsert ) {
        return { $setOnInsert: new Date };
      } else {
        this.unset();
      }
    }
  },
  ownerId: {
    type: String,
    optional: true,
    regEx: SimpleSchema.RegEx.Id
  },
  read: {
    type: Boolean,
    optional: true
  },
  body: {
    type: String,
    label: 'Message',
    max: 400,
    optional: true
  }
} ) );


export default Messages;
