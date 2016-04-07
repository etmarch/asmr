import Collections from '/lib/collections/index';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('notifications', function (notificationsId) {
    return Collections.Notifications.find(notificationsId);
  });
}
