import {Videos} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('videos.single', function (videosId) {
    return Videos.find(videosId);
  });
}
