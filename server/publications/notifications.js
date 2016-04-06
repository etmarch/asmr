import {Notifications} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('notifications', function (notificationsId) {
    return Notifications.find(notificationsId);
  });
}
