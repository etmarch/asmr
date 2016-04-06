import {Requests} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('requests', function (requestsId) {
    return Requests.find(requestsId);
  });
}
