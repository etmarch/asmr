import {Conversations} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('conversations', function (conversationsId) {
    return Conversations.find(conversationsId);
  });
}
