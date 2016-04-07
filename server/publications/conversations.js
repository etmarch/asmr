import Collections from '/lib/collections/index';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('conversations', function (conversationsId) {
    return Collections.Conversations.find(conversationsId);
  });
}
